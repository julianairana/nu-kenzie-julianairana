import React from "react";

export const TotalValores = ({ element, index, values }) => {
  
  return (
    <div>
      <div className="total-div">
        <h3>Valor total:</h3>
        <p key={index}>
          $ {values.reduce((acc, act) => 
          { return act.typeValue === "Entrada" ? act.valueForm * 1 + acc : acc - act.valueForm * 1}, 0)}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );

};
