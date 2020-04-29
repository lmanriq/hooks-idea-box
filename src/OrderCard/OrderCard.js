import React from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { name, ingredients, id } = props;

  const ingredientsList = ingredients.map((ingr) => {
    return <li>{ingr}</li>;
  });
  return (
    <article>
      <h1>{name}</h1>
      <ul>{ingredientsList}</ul>
      <button>delete</button>
    </article>
  );
};

export default OrderCard;