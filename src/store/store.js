import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon";

// configureStore()

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});
