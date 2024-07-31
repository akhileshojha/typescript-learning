// src/redux/slices/productSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { client } from '../../graphql/client';
import { GET_PRODUCTS } from '../../graphql/queries';

interface ProductState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
  items: [],
  status: 'idle'
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await client.query({ query: GET_PRODUCTS });
  return response.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default productSlice.reducer;