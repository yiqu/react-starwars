import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { SwapiFilmsState } from './swapi-films.state';
import { starwarsFilmsApi } from './swapi-films';

const initialState: SwapiFilmsState = {
  filmsLastFetched: undefined
};

export const swFilmsConfigSlice = createSlice({
  name: 'sw-films-config',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsFilmsApi.endpoints.fetchFilms.matchFulfilled, (state, action) => {
    });
  }
});

//export const {  } = swapiFilmsSlice.actions;
export default swFilmsConfigSlice.reducer;