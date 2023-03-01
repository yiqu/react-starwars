import { createSelector } from "@reduxjs/toolkit";
import { StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";

const allCharactersSlice = (state: RootState) => {
  return state.characters;
};

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