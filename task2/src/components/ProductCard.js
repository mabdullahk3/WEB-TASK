import React from 'react';
import { useStore } from '../store/useStore';

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
