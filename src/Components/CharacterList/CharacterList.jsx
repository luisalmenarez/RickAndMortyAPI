export const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
    </div>
  );
};
