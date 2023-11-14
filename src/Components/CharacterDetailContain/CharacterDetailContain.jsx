import { useEffect, useState } from "react";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";

export const CharacterDetailContain = () => {
  const [character, setCharacter] = useState(null);

  const getCharacter = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();

      setCharacter(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter(40);
  }, []);

  return (
    <div className="flex justify-center mt-5">
      {character && <CharacterDetail {...character} />}
    </div>
  );
};
