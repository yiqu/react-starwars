import { createSelector, createAction, createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store/appStore";

const favoritesConfigSlice = (state: RootState) => {
  return state.favoritesConfig;
};


export const selectMutatingFavorites = createSelector(
  favoritesConfigSlice,
  (state)=> {
    return state.mutatingFavorites;
  }
);

export const selectShowCurrentFavoriteList = createSelector(
  favoritesConfigSlice,
  (state): boolean=> {
    return !!state.showCurrentFavsList;
  }
);
