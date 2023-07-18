import React from 'react';
import productList from '../assets/productList';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;