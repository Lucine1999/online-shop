import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productsReducer
  }
});
