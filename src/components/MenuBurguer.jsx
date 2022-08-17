import React, { useState } from "react";

const MenuBurguer = ({ setShowModal, showModal }) => {
  const [open, setOpen] = useState(false);

  const openFunc = () => {
    setOpen(!open);
    setShowModal((state) => {
      return !state;
    });
  };

  return (
    <button
      className={`btn ${open ? "open" : ""}`}
      id="hamburguerContainer"
      onClick={() => openFunc()}
    >
      <span className="top-line"></span>
      <span className="middle-line"></span>
      <span className="bottom-line"></span>
    </button>
  );
};

export default MenuBurguer;
