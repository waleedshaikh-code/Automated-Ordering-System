import {createSlice} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';

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
    removeFromCart: (state, action) => {
      state.cart = [
        ...state.cart.filter(item => item.name != action.payload.name),
      ];
      // alert('Remove');
      console.log('state.cart', state.cart);
      // state.cart = state.cart;
    },
  },
});

export const {addToCart, removeFromCart} = rootSlice.actions;
export default rootSlice.reducer;
