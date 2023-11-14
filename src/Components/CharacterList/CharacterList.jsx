import { Character } from "../Character/Character";

export const CharacterList = ({ characters }) => {
  return (
    <section className="flex flex-wrap justify-center gap-3">
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </section>
  );
};
