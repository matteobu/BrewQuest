import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CoffeeShop {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  image_url: string;
}

interface CoffeeShopsState {
  coffeeShops: CoffeeShop[];
  loading: boolean;
  error: string | null;
}

const initialState: CoffeeShopsState = {
  coffeeShops: [],
  loading: false,
  error: null,
};

// Async thunk to fetch coffee shops
export const fetchCoffeeShops = createAsyncThunk(
  'coffeeShops/fetchCoffeeShops',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://localhost:5858/api/coffee-shops'
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const coffeeShopsSlice = createSlice({
  name: 'coffeeShops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeShops.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCoffeeShops.fulfilled,
        (state, action: PayloadAction<CoffeeShop[]>) => {
          state.loading = false;
          state.coffeeShops = action.payload;
        }
      )
      .addCase(
        fetchCoffeeShops.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload || 'Something went wrong';
        }
      );
  },
});

export default coffeeShopsSlice.reducer;
