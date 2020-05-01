import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const [name, updateName] = useState("");
  const [ingredients, updateIngredients] = useState([]);

  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  const handleIngredientChange = (e) => {
    e.preventDefault();
    updateIngredients([...ingredients, e.target.name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      name,
      ingredients,
    };
    try {
      const response = await fetch("http://localhost:3001/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
      const data = await response.json();
      
    }
    catch(error) {
      console.error(error.message)
    }
    clearInputs();
  };

  const clearInputs = () => {
    updateName("");
    updateIngredients([]);
  };

  const possibleIngredients = [
    { name: "beans ($1)", price: 1 },
    { name: "steak ($2)", price: 2 },
    { name: "carnitas ($2)", price: 2 },
    { name: "sofritas ($2)", price: 2 },
    { name: "lettuce ($0.50)", price: 0.5 },
    { name: "queso fresco ($0.50)", price: 0.5 },
    { name: "pico de gallo ($0.50)", price: 0.5 },
    { name: "hot sauce ($0.50)", price: 0.5 },
    { name: "guacamole ($2)", price: 2 },
    { name: "jalapenos ($0.50)", price: 0.5 },
    { name: "cilantro ($0.50)", price: 0.5 },
    { name: "sour cream ($0.50)", price: 0.5 },
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient.name}
        name={ingredient.name}
        value={ingredient.price}
        onClick={(e) => handleIngredientChange(e)}
      >
        {ingredient.name}
      </button>
    );
  });

  const isDisabled = ingredients.length === 0 || name === "" ? true : false;

  return (
    <form>
      <label>Name:</label>
      <input type="text" onChange={(e) => handleNameChange(e)} value={name} />
      <div>{ingredients.join(", ") || <p>Nothing selected yet</p>}</div>
      {ingredientButtons}
      <button onClick={(e) => this.handleSubmit(e)} disabled={isDisabled}>
        Submit Order
      </button>
    </form>
  );
};

export default OrderForm;
