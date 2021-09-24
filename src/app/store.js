import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Cars/CasSlice';


export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
