import React from "react";

export const TotalValores = ({ element, index, values }) => {
  console.log(values);
  return (
    <div>
      <div className="total-div">
        <h3>Valor total:</h3>
        <p key={index}>
          $ {values.reduce((acc, act) => acc + +act.valueForm, 0)}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
