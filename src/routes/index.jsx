import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePokemon from "../views/HomePokemon";
import PokemonByName from "../views/PokemonByName";

const PokemonRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePokemon />} />
        <Route path="/pokemon/:name" element={<PokemonByName />} />
      </Routes>
    </>
  );
};

export default PokemonRoutes;
