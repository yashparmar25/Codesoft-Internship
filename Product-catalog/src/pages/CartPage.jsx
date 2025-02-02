// src/pages/CartPage.jsx
import React from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import '../styles/CartPage.css';

const CartPage = () => {
  return (
    <div>
      <Header />
      <h2>Your Shopping Cart</h2>
      <Cart />
    </div>
  );
};

export default CartPage;
