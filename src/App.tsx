import {
  FC,
  useEffect,
  useState,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { fetchImages } from "./api";
import breedsList from "./const";

const Header: FC = () => (
  <header className="hero is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Cute Dog Images</h1>
      </div>
    </div>
  </header>
);

type imageProps = {
  src: string;
};

const Image: FC<imageProps> = ({ src }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={src} alt="cute dog" />
      </figure>
    </div>
  </div>
);

const Loading = () => <p>Loading...</p>;

type galleryProps = {
  urls: string[] | null;
  isLoading: boolean;
};

const Gallery: FC<galleryProps> = ({ urls, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (urls == null) {
    return <div>error</div>;
  }

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => (
        <div key={url} className="column is-3">
          <Image src={url} />
        </div>
      ))}
    </div>
  );
};

type FormType = {
  onFormSubmit: (breed: string) => void;
};

const Form: FC<FormType> = ({ onFormSubmit }) => {
  const [breed, setBreed] = useState<string>("shiba");

  const handleSubmit2: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onFormSubmit(breed);
  };

  const handleChange2: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setBreed(event.target.value);
  };

  const sortedBreedsList = breedsList
    .concat()
    .sort((a, b) => (a[1] < b[1] ? -1 : 1));

  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                name="breed"
                defaultValue="shiba"
                onChange={handleChange2}
              >
                {sortedBreedsList.map((elm) => (
                  <option key={elm[0]} value={elm[0]}>
                    {elm[1]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Main: FC = () => {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const load = async (): Promise<void> => {
      try {
        const res = await fetchImages("shiba");
        setUrls(res);
      } catch (err) {
        setUrls(null);
      } finally {
        setIsLoading(false);
      }
    };
    void load();
  }, []);

  const reloadImages = (breed: string) => {
    void fetchImages(breed).then((res) => {
      setUrls(res);
    });
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} isLoading={isLoading} />
        </div>
      </section>
    </main>
  );
};

const Footer: FC = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>Dog images are retrieved from Dog API</p>
      <p>
        <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </div>
  </footer>
);

const App: FC = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
