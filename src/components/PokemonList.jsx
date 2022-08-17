import React, { useEffect, useState } from "react";
import { getPokemonByName } from "../helpers/getPokemonByName";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon, formValue }) => {
  const { isLoading, page, pokemons } = pokemon;
  const [arrayPokemons, setArrayPokemons] = useState([]);

  useEffect(() => {
    const arrPoke = pokemons.map((poke) => getPokemonByName(poke.name));

    Promise.all(arrPoke).then((res) => {
      setArrayPokemons(res);
    });
  }, [pokemons]);

  useEffect(() => {
    getPokemonByName(formValue).then((res) => {
      let arrPokemon = [];
      arrPokemon.push(res);
      console.log(arrPokemon);
      setArrayPokemons(arrPokemon);
    });
  }, [formValue]);

  return (
    <main className="pokemonList">
      <div className="wrapper">
        <div className="pokemonListGrid">
          {arrayPokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default PokemonList;
