import { NavLink } from "react-router-dom";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import { Button } from "../Button/Button";

export const NavHeader = () => {
  return (
    <>
      <nav className="flex gap-2">
        <NavLink to="/">
          <Button text="All" />
        </NavLink>
        <NavLink to="/characters/alive">
          <Button text="Alive" />
        </NavLink>
        <NavLink to="/characters/dead">
          <Button text="Dead" />
        </NavLink>
        <NavLink to="/characters/unknown">
          <Button text="Unknown" />
        </NavLink>
      </nav>
      <nav className="flex gap-2 m-2">
        <a
          className="transition-all duration-300 hover:scale-110 hover:text-indigo-600"
          href="https://github.com/luisalmenarez"
          target="_blank"
          rel="noreferrer">
          <GitHub />
        </a>
        <a
          className="transition-all duration-300 hover:scale-110 hover:text-indigo-600"
          href="https://x.com/_luisalmenarez"
          target="_blank"
          rel="noreferrer">
          <Twitter />
        </a>
        <a
          className="transition-all duration-300 hover:scale-110 hover:text-indigo-600"
          href="https://x.com/_luisalmenarez"
          target="_blank"
          rel="noreferrer">
          <LinkedIn />
        </a>
      </nav>
    </>
  );
};
