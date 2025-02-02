// src/components/ProductCatalog.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCatalog;
