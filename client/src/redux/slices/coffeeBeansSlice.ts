import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CoffeeBean {
  id: number;
  coffee_shop_id: number;
  name: string;
  origin: string;
  region: string;
  variety: string;
  processing_method: string;
  roast_level: 'Light' | 'Light-Medium' | 'Medium' | 'Medium-Dark' | 'Dark'; // Use string union for predefined options
  tasting_notes: string; // Alternatively, string[]
  body: 'Light' | 'Medium' | 'Full'; // Use string union for predefined options
  acidity: 'Low' | 'Medium' | 'High'; // Use string union for predefined options
  sweetness: 'Low' | 'Medium' | 'High'; // Use string union for predefined options
  type_of_brew: 'Espresso' | 'Filter Coffee'; // Use string union for predefined options
  price_250: number; // Price for 250g in dollars
  price_1000: number; // Price for 1000g in dollars
  grind_size_recommendations: string; // Alternatively, use a union type for predefined grind sizes
  roast_date: string; // Use string for ISO date format
}

interface CoffeeBeansState {
  coffeeBeans: CoffeeBean[];
  loading: boolean;
  error: string | null;
}

const initialState: CoffeeBeansState = {
  coffeeBeans: [],
  loading: false,
  error: null,
};

// Async thunk to fetch coffee shops
export const fetchCoffeeBeans = createAsyncThunk(
  'coffeeBeans/fetchCoffeeBeans',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://localhost:5858/api/coffee-beans'
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const coffeeBeansSlice = createSlice({
  name: 'coffeeBeans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeBeans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCoffeeBeans.fulfilled,
        (state, action: PayloadAction<CoffeeBean[]>) => {
          state.loading = false;
          state.coffeeBeans = action.payload;
        }
      )
      .addCase(
        fetchCoffeeBeans.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload || 'Something went wrong';
        }
      );
  },
});

export default coffeeBeansSlice.reducer;
