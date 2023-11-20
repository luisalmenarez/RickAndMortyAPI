import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Character = ({ id, name, image }) => {
  return (
    <article className="grid place-items-center border rounded-xl p-2 gap-1 transition-all duration-300 hover:scale-105">
      <img className="rounded-xl w-10/12" src={image} alt={`Image ${name}`} />
      <p>Name: {name}</p>
      <Link to={`/character/${id}`}>
        <Button text="Details" />
      </Link>
    </article>
  );
};
