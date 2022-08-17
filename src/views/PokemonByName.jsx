import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getPokemonByName } from "../helpers/getPokemonByName";
import logo from "../assets/images/logo.png";
import { FiChevronLeft } from "react-icons/fi";

const PokemonByName = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  const { height, id, name: namePokemon, weight, abilities, stats } = pokemon;

  console.log({ height, id, name });

  useEffect(() => {
    getPokemonByName(name).then((res) => {
      setPokemon(res);
    });
    console.log({ stats });
  }, []);

  return (
    <>
      <header className=" head">
        <div className="headerLogo ">
          <img src={logo} alt="Logo de pokemon" />
        </div>
        <div className="previous ">
          <div className="backBox " onClick={() => navigate(-1)}>
            <FiChevronLeft />
          </div>
          <h4 onClick={() => navigate(-1)}>Back</h4>
        </div>
      </header>
      <div className="pokemonByNameGrid ">
        <div className="wrapper">
          <div className="pokemonDetail">
            <div className="imageContainer ">
              <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
                alt=""
              />
            </div>
            <div className="pokemonDetails-content">
              <h1 className="text-center">{namePokemon}</h1>
              <div className="field">
                <h3>Weight & Height</h3>
                <p>
                  Weight: <span>{weight} Kg</span>
                </p>
                <p>
                  Height: <span>{height}</span>
                </p>
              </div>
              <div className="field">
                <h3>Abilities</h3>
                <ul>
                  {abilities?.map((ability) => {
                    return <li>{ability.ability.name}</li>;
                  })}
                </ul>
              </div>
              <div className="field boxContainer">
                {stats?.map((stat) => {
                  return (
                    <div className="boxItem">
                      <h5>{stat.stat.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonByName;
