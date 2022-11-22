import imgLogoHeader from "../../img/Nu Kenzie-header.svg";
import "./header.css";
import React from "react";

export const Header = ({setState}) => {
  return (
    <div className="div-header">
      <img src={imgLogoHeader} alt="logo Nu Kenzie" />
      <button onClick={() => setState(false)}>Inicio</button>
    </div>
  );
};
