import noCard from "../../img/NoCard.svg";
import "./homePage.css";
import { Header } from "../Header/header";
import React from "react";
import { Form } from "../Form/form";
import { TotalValores } from "../Value/value";
import { ListRender } from "../List/list";
import { useState } from "react";

export const HomeNoCard = ({ setState }) => {
  const [values, setValues] = useState([]);
  const [filterButton, setFilterButton] = useState("Todos");

  const dataFilter = values.filter((element) => {
    if (filterButton === "Todos") {
      return true;
    } else {
      return element.typeValue === filterButton;
    }
  });

  function deletCards(cardDelet) {
    const delet = values.filter((element)=>
      element !== cardDelet)
      setValues(delet)
  }

  return (
    <div>
      <Header setState={setState} />
      <div className="div-main">
        <div className="div-all">
          <div className="div-form">
            <Form setValues={setValues} />
          </div>
          {values.length !== 0 &&
          <div>
            <div className="div-total">
              <TotalValores values={values} />
            </div>
          </div>
          }
        </div>
        <div className="div-launch">
          <div className="div-button">
            <h3>Resumo financeiro</h3>

            <button
              value="Todos"
              onClick={() => {
                setFilterButton("Todos");
              }}
            >
              Todos
            </button>
            <button
              value="Entrada"
              onClick={() => {
                setFilterButton("Entrada");
              }}
            >
              Entrada
            </button>
            <button
              value="Despesas"
              onClick={() => {
                setFilterButton("Despesas");
              }}
            >
              Despesas
            </button>
          </div>

          {dataFilter.length === 0 && (
            <div>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img className="img-noCard" src={noCard} alt="" />
              <img className="img-noCard" src={noCard} alt="" />
              <img className="img-noCard" src={noCard} alt="" />
            </div>
          )}

          <ul className="ulList">
            {dataFilter.map((element, index) => (
              <ListRender index={index} element={element} key={index} deletCards = {()=> deletCards(element)} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
