import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const { cart, checkout } = useStore();

  const handleCheckout = () => {
    if (address) {
      checkout();
      alert('Payment Confirmed! Your order is placed.');
    } else {
      alert('Please provide a shipping address');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Enter shipping address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleCheckout} disabled={cart.length === 0 || !address}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
