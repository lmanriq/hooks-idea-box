import React, { useState, useEffect } from 'react';

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
      <h2>{order.name}</h2>
    )
  })

  return (
    <section>
      <h1>Orders</h1>
      {orderCards}
    </section>
  )
}

export default OrderContainer;