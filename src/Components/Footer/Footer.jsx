export const Footer = () => {
  return (
    <footer className="w-full flex p-5 gap-1 justify-center uppercase italic ">
      <p className="text-sm font-bold">Created for ©</p>
      <a
        className="text-sm font-bold transition-all duration-300 hover:text-indigo-600"
        href="https://github.com/luisalmenarez"
        target="_blank"
        rel="noreferrer">
        Luis Almenarez
      </a>
      <p className="text-sm font-bold italic">2023</p>
    </footer>
  );
};
