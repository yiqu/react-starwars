import { createSelector } from "@reduxjs/toolkit";
import { HttpParams } from "src/shared/models/http.model";
import { StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import { adapter } from "./characters.reducer";

const allCharactersSlice = (state: RootState) => {
  return state.characters;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.characters);

export const characterHomePlanetLoading = createSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.characterHomePlanetApiLoading;
  }
);

export const characterHomePlanet = createSelector(
  allCharactersSlice,
  (state): StarwarsPlanet | undefined => {
    return state.currentCharacterHomeWorld;
  }
);

export const firstTimeLoading = createSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.firstTimeLoading;
  }
);

export const apiLoading = createSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.apiLoading;
  }
);

export const extraParams = createSelector(
  allCharactersSlice,
  (state): HttpParams | undefined => {
    return state.extraFetchParams;
  }
);