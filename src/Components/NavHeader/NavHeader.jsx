import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";

export const NavHeader = () => {
  return (
    <nav className="flex gap-2">
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
  );
};
