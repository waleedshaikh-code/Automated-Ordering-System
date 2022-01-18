import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, {...action.payload}];
    },
    removeFromCard: (state, action) => {
      state.cart = [...state.cart.filter(item => item.id != action.payload.id)];
    },
  },
});

export const {addToCart} = rootSlice.actions;
export default rootSlice.reducer;
