// src/pages/HomePage.jsx
import React from 'react';
import ProductCatalog from '../components/ProductCatalog';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h2>Our Products</h2>
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
