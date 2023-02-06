import { createSelector, createAction } from "@reduxjs/toolkit";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import * as fromFavoritesReducer from './favorites.reducer';
import produce from 'immer';


const favoriteFilmsSlice = (state: RootState) => {
  return state.favoriteFilms;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  fromFavoritesReducer.adapter.getSelectors((state: RootState) => state.favoriteFilms);

export const selectIsLoading = (state: RootState) => {
  return favoriteFilmsSlice(state).loading;
};

export const selectIsFirstTimeLoading = (state: RootState) => {
  return favoriteFilmsSlice(state).firstTimeLoading;
};

export const selectError = (state: RootState) => {
  return favoriteFilmsSlice(state).error;
};

export const selectErrorMsg = (state: RootState) => {
  return favoriteFilmsSlice(state).errMsg;
};

export const selectAllByEpId = createSelector(
  selectAll,
  (state: FavoriteToSave[]): FavoriteMoviesObjList => {
    const allFavs = state;
    const transformedData: FavoriteMoviesObjList = {};
    allFavs.forEach((fav: FavoriteToSave) => {
      transformedData[fav.episodeId] = {
        ...fav
      };
    });
    return transformedData;
  }
);