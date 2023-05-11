import { createSelector, createAction, createDraftSafeSelector } from "@reduxjs/toolkit";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import produce from 'immer';
import { adapter } from "./favorites.reducer";
import { HttpParams } from "src/shared/models/http.model";

const favoriteFilmsSlice = (state: RootState) => {
  return state.favoriteFilms;
};

const favoritesConfigSlice = (state: RootState) => {
  return state.favoritesConfig;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.favoriteFilms);

export const selectMutatingFavorites = createDraftSafeSelector(
  favoritesConfigSlice,
  (state)=> {
    return state.mutatingFavorites;
  }
);

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

export const selectExtraFetchParams = createSelector(
  favoriteFilmsSlice,
  (state): HttpParams | undefined => {
    return state.extraFetchParams;
  }
);

export const selectFilteredFavorites = createSelector(
  selectAll,
  favoriteFilmsSlice,
  (allFavs, state) => {
    const favs = state.extraFetchParams?.equalTo ? (state.filteredFavorites ?? []) : allFavs;
    const result: FavoriteToSave[] = produce(favs, (draft) => {
      return draft.filter((fav) => {
        return !!fav.isCurrentFavorite;
      }).sort((a, b) => {
        return a.lastUpdated < b.lastUpdated ? 1 : -1;
      });
    });
    return result;
  }
);