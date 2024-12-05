import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  email: localStorage.getItem('email') || '',
  password: localStorage.getItem('password') || '',
};

export const storeSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    setValues: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;  
      state.password = password;  
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    },
    clearValues: (state) => {
      state.email = '';
      state.password = '';
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }
});

export const { setValues, clearValues } = storeSlice.actions;
export default storeSlice.reducer;
