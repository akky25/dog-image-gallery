import { FC } from "react";
import Image from "./Image";

type galleryProps = {
  urls: string[] | null;
  isLoading: boolean;
};

const Gallery: FC<galleryProps> = ({ urls, isLoading }) => {
  if (isLoading || urls === null) {
    return <p>Loading...</p>;
  }
  if (urls.length === 0) {
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

export default Gallery;
