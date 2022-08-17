import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import PokemonList from "../components/PokemonList";
import { getPokemons } from "../store/slices/pokemon";

const HomePokemon = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);
  const { isLoading, page, pokemons } = pokemon;
  const [formValue, setFormValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getPokemons(page));
  }, []);

  return (
    <div className="mainGrid ">
      {showModal && <Modal />}
      <Header
        setFormValue={setFormValue}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <PokemonList pokemon={pokemon} formValue={formValue} />
      )}
      <Footer />
    </div>
  );
};

export default HomePokemon;
