import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { SwapiState } from './swapi.state';
import { starwarsContentApi } from './swapi';

const initialState: SwapiState = {
  pagination: {
    page: 1
  }
};

const swapiSlice = createSlice({
  name: 'swapiConfig',
  initialState,
  reducers: {
    dispatchPaging: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsContentApi.endpoints.fetchSpecies.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        total_pages: payload.total_pages,
        total_records: payload.total_records,
        next: payload.next,
        previous: payload.previous
      };
      
    });
  }
});

export const { dispatchPaging } = swapiSlice.actions;
export default swapiSlice.reducer;