import { NavHeader } from "../NavHeader/NavHeader";

export const Header = () => {
  return (
    <header className="grid place-items-center m-6 p-6">
      <h1 className="text-4xl font-bold italic text-center m-2">
        RICK AND MORTY API
      </h1>
      <NavHeader />
    </header>
  );
};
