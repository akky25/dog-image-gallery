import React, { FC } from "react";

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

type galleryProps = {
  urls: string[];
};

const Gallery: FC<galleryProps> = ({ urls }) => (
  <div className="columns is-vcentered is-multiline">
    {urls.map((url) => (
      <div key={url} className="column is-3">
        <Image src={url} />
      </div>
    ))}
  </div>
);
const Main: FC = () => {
  const urls = [
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
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
