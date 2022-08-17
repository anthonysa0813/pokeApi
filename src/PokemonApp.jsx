import React from "react";
import { BrowserRouter } from "react-router-dom";
import PokemonRoutes from "./routes";

const PokemonApp = () => {
  return (
    <BrowserRouter>
      <PokemonRoutes />
    </BrowserRouter>
  );
};

export default PokemonApp;
