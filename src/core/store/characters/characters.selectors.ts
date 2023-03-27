import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { HttpParams } from "src/shared/models/http.model";
import { StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import { adapter } from "./characters.reducer";

const allCharactersSlice = (state: RootState) => {
  return state.characters;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.characters);

export const characterHomePlanetLoading = createDraftSafeSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.characterHomePlanetApiLoading;
  }
);

export const characterHomePlanet = createDraftSafeSelector(
  allCharactersSlice,
  (state): StarwarsPlanet | undefined => {
    return state.currentCharacterHomeWorld;
  }
);

export const firstTimeLoading = createDraftSafeSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.firstTimeLoading;
  }
);

export const apiLoading = createDraftSafeSelector(
  allCharactersSlice,
  (state): boolean => {
    return !!state.apiLoading;
  }
);

export const extraParams = createDraftSafeSelector(
  allCharactersSlice,
  (state): HttpParams | undefined => {
    return state.extraFetchParams;
  }
);

export const charactersGrouped = createDraftSafeSelector(
  selectAll,
  (state: StarwarsContent[]) => {
    const result = [...state];
    result.sort((a: StarwarsContent, b: StarwarsContent) => {
      return a.name > b.name ? 1 : -1;
    });
    const newArray: StarwarsContent[] = [];

    result.forEach(({ name }, index: number) => {
      if (index === 0) {
        newArray.push({name: result[index].name.charAt(0), uid: result[index].name.charAt(0), url: ""});
      }
      const firstLetter = name.charAt(0);
      if ((result[index-1]) && firstLetter !== result[index-1].name.charAt(0)) {
        newArray.push({name: result[index].name.charAt(0), uid: result[index].name.charAt(0), url: ""});
      }
      newArray.push(result[index]);
    });
    return newArray;
  }
);
