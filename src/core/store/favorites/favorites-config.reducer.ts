import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { FavoritesConfigState } from './favorites.state';
import { starwarsFavoritesApi } from './favorites.api';
import { unset } from 'lodash';

const initialState: FavoritesConfigState = {
  mutatingFavorites: {},
  lastFavToggled: undefined,
  showCurrentFavsList: false
};

export const favoritesConfigSlice = createSlice({
  name: 'favoritesConfig',
  initialState,
  reducers: {
    toggleShowCurrentFavList: (state, action: PayloadAction<boolean>) => {
      state.showCurrentFavsList = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchPending, (state, action) => {
      const favId = action.meta.arg.originalArgs.fireId ?? '';
      state.mutatingFavorites[favId] = true;
    });
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchFulfilled, (state, action) => {
      const favId = action.meta.arg.originalArgs.fireId ?? '';
      unset(state.mutatingFavorites, favId);
      state.lastFavToggled = action.payload;
    });
    builder.addMatcher(starwarsFavoritesApi.endpoints.updateFavorite.matchRejected, (state, action) => {
      const favId = action.meta.arg.originalArgs.fireId ?? '';
      unset(state.mutatingFavorites, favId);
    });
  }
});

export const { toggleShowCurrentFavList } = favoritesConfigSlice.actions;
export default favoritesConfigSlice.reducer;