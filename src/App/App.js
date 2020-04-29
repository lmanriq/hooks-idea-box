import React from 'react';
import './App.css';
import OrderContainer from '../OrderContainer/OrderContainer'
import OrderForm from '../OrderForm/OrderForm'

function App() {
  return (
    <div className="App">
      <OrderForm />
      <OrderContainer />
    </div>
  );
}

export default App;
