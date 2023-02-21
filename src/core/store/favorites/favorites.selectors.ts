import { createSelector, createAction } from "@reduxjs/toolkit";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import produce from 'immer';
import { adapter } from "./favorites.reducer";

const favoriteFilmsSlice = (state: RootState) => {
  return state.favoriteFilms;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.favoriteFilms);

export const selectIsLoading = (state: RootState) => {
  return favoriteFilmsSlice(state).loading;
};

export const selectIsFavToggleLoading = (state: RootState) => {
  return favoriteFilmsSlice(state).favoriteToggleLoading;
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

export const selectFavorited = createSelector(
  selectAll,
  (allFavs: FavoriteToSave[]) => {
    const result: FavoriteToSave[] = produce(allFavs, (draft) => {
      return draft.filter((fav) => {
        return !!fav.isCurrentFavorite;
      }).sort((a, b) => {
        return a.lastUpdated < b.lastUpdated ? 1 : -1;
      });
    });
    return result;
  }
);