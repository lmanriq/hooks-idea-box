import React, { useState, useEffect } from 'react';
import './OrderContainer.css';
import OrderCard from '../OrderCard/OrderCard';

const OrderContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/v1/orders');
      const data = await response.json();
      setOrders(data.orders);
    }
    fetchData()
  }, [])

  const orderCards = orders.map(order => {
    return (
      <OrderCard
        key={order.id}
        {...order}
      />
    )
  })

  return (
    <section>
      <h1>Orders</h1>
      <section className="order-container">
        {orderCards}
      </section>
    </section>
  )
}

export default OrderContainer;