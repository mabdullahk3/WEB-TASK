import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import { useStore } from './store/useStore';

const App = () => {
  const { cart } = useStore();

  return (
    <div className="app">
      <h1>E-commerce Platform</h1>
      <ProductList />
      {cart.length > 0 && <Cart />}
      <Checkout />
      <Dashboard />
    </div>
  );
};

export default App;
