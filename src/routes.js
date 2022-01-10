import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Comics } from "./pages/Comics";
import { Cart } from "./pages/Cart";
import { Characters } from "./pages/Characters";
import { DetailsCharacters } from "./pages/DetailsCharacters";
import { DetailComics } from "./pages/DetailsComics";
import { Navbar } from "./components/Navbar/NavBar";
import { InitialPage } from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route exact path="/comics" element={<Comics />} />
        <Route exact path="/comics/:id" element={<DetailComics />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/characters/:id" element={<DetailsCharacters />} />
      </Routes>
    </BrowserRouter>
  );
}
