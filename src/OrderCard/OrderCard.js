import React from "react";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { name, ingredients, id, deleteOrder } = props;

  const ingredientsList = ingredients.map((ingr, index) => {
    return <li key={index}>{ingr}</li>;
  });

  const deleteOrderCard = () => {
    deleteOrder(id)
    const sendDeleteRequest = async () => {
      const response = await fetch(`http://localhost:3001/api/v1/orders/${id}`, {
        method: 'DELETE'
      });
      console.log(response.status)
    }
    sendDeleteRequest()
  }
  return (
    <article>
      <h1>{name}</h1>
      <ul>{ingredientsList}</ul>
      <button onClick={deleteOrderCard}>delete</button>
    </article>
  );
};

export default OrderCard;