import { FC, useEffect, useState } from "react";
import Gallery from "./Gallery";
import Form from "./Form";
import { fetchImages } from "./api";

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
        setUrls([]);
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

export default Main;
