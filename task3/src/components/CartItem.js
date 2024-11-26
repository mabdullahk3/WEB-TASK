// src/components/CartItem.js
import React, { useState } from 'react';

const CartItem = ({ item, onRemove, onAdjustQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    onAdjustQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price} x </p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
