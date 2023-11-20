import { CharacterContain, CharacterDetailContain, Header } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterContain />} />
        <Route path="/characters/:status" element={<CharacterContain />} />
        <Route path="/character/:id" element={<CharacterDetailContain />} />
      </Routes>
    </BrowserRouter>
  );
};
