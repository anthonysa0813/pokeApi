import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../store/slices/pokemon";
import { getPokemons } from "../store/slices/pokemon/thunks";

const Menu = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);
  console.log(pokemon);
  return (
    <div className="menu ">
      <div className="wrapper">
        <div className="menuContainer ">
          <div className="controls ">
            <div
              className="box"
              onClick={() => dispatch(getPokemons(Number(pokemon.page) - 1))}
            >
              <FiArrowLeft />
            </div>
            <div
              className="box"
              onClick={() => dispatch(getPokemons(pokemon.page))}
            >
              <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
