import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { FavoritesConfigState } from './favorites.state';
import { starwarsFavoritesApi } from './favorites.api';
import { unset } from 'lodash';

const initialState: FavoritesConfigState = {
  lastFavToggled: undefined,
  showCurrentFavsList: false,
  filterParams: {param1: 'param1'}
};

export const favoritesConfigSlice = createSlice({
  name: 'favoritesConfig',
  initialState,
  reducers: {
    toggleShowCurrentFavList: (state, action: PayloadAction<boolean>) => {
      state.showCurrentFavsList = action.payload;
    },
    updateParams: (state, action: PayloadAction<{[key: string]: string}>) => {
      state.filterParams = {...action.payload};
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchPending, (state, action) => {
    });
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchFulfilled, (state, action) => {
      state.lastFavToggled = action.payload;
    });
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchRejected, (state, action) => {
    });
  }
});

export const { toggleShowCurrentFavList, updateParams } = favoritesConfigSlice.actions;
export default favoritesConfigSlice.reducer;