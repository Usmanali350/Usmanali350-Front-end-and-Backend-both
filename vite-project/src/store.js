
import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './Feature/StoreSlice'; 
export const store = configureStore({
  reducer: {
    storage: storeReducer, 
  }
});

export default store;
