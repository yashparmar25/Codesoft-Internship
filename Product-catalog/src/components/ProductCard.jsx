// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
