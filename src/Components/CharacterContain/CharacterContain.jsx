import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContain = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const { results } = await response.json();
      setCharacters(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) {
      setPage(1);
      return;
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <main className="flex flex-col align-items-center m-6">
      <CharacterList characters={characters} />
      <div className="flex justify-center m-4 gap-2">
        <button
          onClick={handlePrevPage}
          className="bg-indigo-500 transition-all duration-500 hover:bg-indigo-700 hover:scale-105 text-white text-sm font-bold py-1 px-6 rounded focus:outline-none uppercase">
          Prev
        </button>
        <strong>Page: {page}</strong>
        <button
          onClick={handleNextPage}
          className="bg-indigo-500 transition-all duration-500 hover:bg-indigo-700 hover:scale-105 text-white text-sm font-bold py-1 px-6 rounded focus:outline-none uppercase">
          Next
        </button>
      </div>
    </main>
  );
};
