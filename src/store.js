import {configureStore} from '@reduxjs/toolkit';
import rootSlice from './rootSlice';

const store = configureStore({
  reducer: {
    rootReducer: rootSlice,
  },
});

export default store;
