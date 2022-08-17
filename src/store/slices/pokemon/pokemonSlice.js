import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    nextPage: (state, action) => {
      state.page += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, setPokemons, nextPage } = pokemonSlice.actions;
