import React, { useEffect } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokemonCard  ">
      <div className="pokemonImage">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
      </div>
      <div className="pokemonInfo">
        <div className="pokeinfoHead ">
          <h2>{pokemon.name}</h2>
          <RiHeart3Fill />
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
