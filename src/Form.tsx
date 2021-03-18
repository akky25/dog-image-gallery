import { FC, useState, FormEventHandler, ChangeEventHandler } from "react";
import breedsList from "./const";

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

export default Form;
