import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      setCharacters(results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="flex flex-col align-items-center">
      <CharacterList characters={characters} />
    </div>
  );
};
