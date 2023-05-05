import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { SwapiFilmsState } from './swapi-films.state';
import { starwarsFilmsApi } from './swapi-films';

const initialState: SwapiFilmsState = {
  filmsLastFetched: undefined
};

const swapiFilmsSlice = createSlice({
  name: 'swapiFilmsConfig',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsFilmsApi.endpoints.fetchFilms.matchFulfilled, (state, action) => {
      console.log("fulfulled");
    });
  }
});

//export const {  } = swapiFilmsSlice.actions;
export default swapiFilmsSlice.reducer;