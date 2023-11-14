import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../Button/Button";

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
    if (page === 42) {
      return page(42);
    }
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
    <main className="grid grid-row-4  align-items-center m-6">
      <CharacterList characters={characters} />
      <div className="flex justify-center m-4 p-4 gap-2">
        {page === 1 ? null : <Button text="Prev" onClick={handlePrevPage} />}
        <strong>Page: {page}</strong>
        {page === 42 ? null : <Button text="Next" onClick={handleNextPage} />}
      </div>
    </main>
  );
};
