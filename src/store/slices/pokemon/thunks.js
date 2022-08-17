import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page}`
    );
    const data = await response.json();
    console.log(data.results);
    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: data.results,
      })
    );
  };
};
