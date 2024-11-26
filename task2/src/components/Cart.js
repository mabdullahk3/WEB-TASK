import React from 'react';
import { useStore } from '../store/useStore';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useStore();

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value, 10);
    updateCartQuantity(productId, quantity);
  };

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h3>{product.title}</h3>
          <input
            type="number"
            value={product.quantity}
            min="1"
            onChange={(e) => handleQuantityChange(product.id, e)}
          />
          <p>${product.price * product.quantity}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
