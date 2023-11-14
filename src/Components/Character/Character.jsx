export const Character = ({ name, image }) => {
  return (
    <article className="flex flex-col border p-2 m-2 gap-2 text-center">
      <p>Name: {name}</p>
      <img src={image} alt={`Image ${name}`} />
      <button className="bg-indigo-500 transition-all duration-500 hover:bg-indigo-700 hover:scale-105 text-white text-sm font-bold py-1 px-6 rounded focus:outline-none uppercase">
        Details
      </button>
    </article>
  );
};
