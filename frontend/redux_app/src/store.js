import { configureStore } from '@reduxjs/toolkit'; // From Redux Toolkit
import cartReducer from './reducers/cartReducer'; // Your cart reducer

const store = configureStore({
  reducer: cartReducer, // Set the reducer here
});

export default store;
