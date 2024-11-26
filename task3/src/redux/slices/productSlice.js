// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
