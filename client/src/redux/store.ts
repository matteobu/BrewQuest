import { configureStore } from '@reduxjs/toolkit';
import coffeeShopsReducer from './slices/coffeeShopsSlice';
import coffeeBeansReducer from './slices/coffeeBeansSlice';

const store = configureStore({
  reducer: {
    coffeeShops: coffeeShopsReducer,
    coffeeBeans: coffeeBeansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
