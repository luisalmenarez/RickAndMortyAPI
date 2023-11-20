import { useEffect, useState } from "react";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const CharacterDetailContain = () => {
  const { id } = useParams();

  console.log(id);

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
    getCharacter(id);
  }, []);

  return (
    <>
      <main className="flex justify-center mt-5">
        {character && <CharacterDetail {...character} />}
      </main>
      <Footer />
    </>
  );
};
