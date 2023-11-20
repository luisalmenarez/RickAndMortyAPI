import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const CharacterDetail = ({ name, species, location, image, gender }) => {
  return (
    <>
      {" "}
      <div className="p-5 border border-l-red-500 rounded-lg">
        <div className="flex justify-center">
          <img src={image} alt={`Image ${name}`} />
        </div>
        <div className="flex flex-col p-2 gap-1">
          <p>Name: {name}</p>
          <p>Specie: {species} </p>
          <p>Gender: {gender} </p>
          <p>Planet: {location.name} </p>
          <Link to="/">
            <Button text="Back" />
          </Link>
        </div>
      </div>
    </>
  );
};
