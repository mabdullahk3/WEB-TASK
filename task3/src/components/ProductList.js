// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
