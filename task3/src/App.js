// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Redux Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
