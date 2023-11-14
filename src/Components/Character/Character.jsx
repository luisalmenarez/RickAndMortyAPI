export const Character = ({ name, image }) => {
  return (
    <article className="grid place-items-center border rounded-xl p-2 gap-1">
      <img className="rounded-xl w-10/12" src={image} alt={`Image ${name}`} />
      <p>Name: {name}</p>
      <button className="w-5/12 bg-indigo-500 transition-all duration-500 hover:bg-indigo-700 hover:scale-105 text-white text-sm font-bold py-1 px-6 rounded focus:outline-none uppercase">
        Details
      </button>
    </article>
  );
};
