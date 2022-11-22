import { useState } from "react";
import React from "react";

export const Form = ({ setValues }) => {
  const [description, setDescription] = useState("");
  const [valueForm, setValueForm] = useState("");
  const [typeValue, setTypeValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const values = {
      description,
      valueForm,
      typeValue,
    };

    setValues((oldValues) => [...oldValues, values]);

    setDescription("");
    setValueForm("");
    setTypeValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          id="description"
          value={description}
          placeholder="Digite aqui sua descrição"
        />
        <span className="span-ex">Ex: Compra de roupas</span>
        <div className="div-value">
          <div className="div-span">
            <span className="span-value">Valor</span>
            <input
              type="number"
              onChange={(event) => setValueForm(event.target.value)}
              id="valueForm"
              value={valueForm}
              placeholder="R$"
            />
          </div>
          <div className="div-span-value">
            <span className="span-value">Tipo de valor</span>
            <select
              name="typeValue"
              id="typeValue"
              onChange={(event) => setTypeValue(event.target.value)}
              value={typeValue}
            >
              <option value=""></option>
              <option value="Entrada">Entrada</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
};
