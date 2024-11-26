// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, adjustQuantity } from '../redux/slices/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleAdjustQuantity = (id, quantity) => {
    dispatch(adjustQuantity({ id, quantity }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onAdjustQuantity={handleAdjustQuantity}
          />
        ))
      )}
      <div className="cart-summary">
        <p>Total: ${totalPrice}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
