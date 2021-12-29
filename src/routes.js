import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetailComics } from "./pages/Details";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<DetailComics />} />
      </Routes>
    </BrowserRouter>
  );
}
