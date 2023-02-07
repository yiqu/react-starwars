import { createSelector } from "@reduxjs/toolkit";
import { FavoriteMoviesObjList, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import * as fromFilmsReducer from './films.reducer';
import * as fromFavFilmsSelectors from '../favorites/favorites.selectors';
import { getSortedFilmsWithFavorited } from "src/core/utils/films.utils";
import { HttpParams } from "src/shared/models/http.model";
import produce from "immer";

const allFilmsSlice = (state: RootState) => {
  return state.allFilms;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  fromFilmsReducer.adapter.getSelectors((state: RootState) => state.allFilms);

export const selectIsLoading = (state: RootState) => {
  return allFilmsSlice(state).isLoading;
};

export const selectIsValidating = (state: RootState) => {
  return allFilmsSlice(state).isValidating;
};

export const selectApiUrl = (state: RootState) => {
  return allFilmsSlice(state).apiUrl;
};

export const selectApiParams = (state: RootState) => {
  return allFilmsSlice(state).apiParams;
};

export const selectError = (state: RootState) => {
  return allFilmsSlice(state).errMsg;
};


export const getAllFilmsWithFavorites = createSelector(
  selectAll,
  fromFavFilmsSelectors.selectAllByEpId,
  (allFilms: ResultProperty<StarwarsFilm>[], favFilmsMap: FavoriteMoviesObjList): ResultProperty<StarwarsFilm>[] => {
    const result = getSortedFilmsWithFavorited(allFilms, favFilmsMap);
    return result;
  }
);

export const getFetchParams = createSelector(
  selectApiParams,
  (params: HttpParams | undefined) => {
    let p = {
      ...params
    };
    const keys = Object.keys(p);
    keys.forEach((key) => {
      const value = `${p[key]}`.trim();
      if (value === '') {
        delete p[key];
      }
    });
    return p;
  }
);