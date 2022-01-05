import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Characters } from "./pages/Characters";
import { DetailsCharacters } from "./pages/DetailsCharacters";
import { DetailComics } from "./pages/DetailsComics";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comics/:id" element={<DetailComics />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/characters/:id" element={<DetailsCharacters />} />
      </Routes>
    </BrowserRouter>
  );
}
