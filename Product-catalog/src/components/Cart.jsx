// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <div className="total">
            <h3>Total: ${getTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
