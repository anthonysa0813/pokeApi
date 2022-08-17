import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import Message from "./Message";
import MenuBurguer from "./MenuBurguer";

const Header = ({ setFormValue, setShowModal }) => {
  const [inputValue, setinputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      console.log("Deberia de escribir algo....");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    console.log(inputValue);
    setFormValue(inputValue.toLowerCase());
    setError(false);
    setinputValue("");
  };

  return (
    <header className="">
      <div className="wrapper ">
        <nav className="header ">
          <div className="imageBox  ">
            <img src={logo} alt="Logo de PokemonApp" />
          </div>
          {error && <Message>Debes de escribir un Pokemón...</Message>}
          <div className="inputBox ">
            <form onSubmit={handleSubmit} className="searchContainer">
              <input
                type="text"
                placeholder="Search a pokemon..."
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
              />
              <button className="btn" type="submit">
                <RiSearch2Line />
              </button>
            </form>
          </div>
          <MenuBurguer setShowModal={setShowModal} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
