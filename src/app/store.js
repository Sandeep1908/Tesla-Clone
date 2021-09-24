import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Cars/CasSlice';
import StatusReducer from '../features/Nav/Status'

export const store = configureStore({
  reducer: {
    car: carReducer,
    Status:StatusReducer,
  },
});
