import { FC } from "react";

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

export default Image;
