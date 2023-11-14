export const CharacterDetail = ({ name, species, location, image, gender }) => {
  return (
    <div className="p-5 border border-l-red-500 rounded-lg">
      <div className="flex justify-center">
        <img src={image} alt={`Image ${name}`} />
      </div>
      <div className="flex flex-col">
        <p>Name: {name}</p>
        <p>Specie: {species} </p>
        <p>Gender: {gender} </p>
        <p>Planet: {location.name} </p>
      </div>
    </div>
  );
};
