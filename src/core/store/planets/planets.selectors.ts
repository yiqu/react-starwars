import { createSelector, createDraftSafeSelector } from "@reduxjs/toolkit";
import { HttpParams } from "src/shared/models/http.model";
import { StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import { adapter } from "./planets.reducer";

const planetsSlice = (state: RootState) => {
  return state.planets;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.planets);

export const firstTimeLoading = createDraftSafeSelector(
  planetsSlice,
  (state): boolean => {
    return !!state.firstTimeLoading;
  }
);

export const apiLoading = createDraftSafeSelector(
  planetsSlice,
  (state): boolean => {
    return !!state.apiLoading;
  }
);

export const extraParams = createDraftSafeSelector(
  planetsSlice,
  (state): HttpParams | undefined => {
    return state.extraFetchParams;
  }
);

export const planetsGrouped = createDraftSafeSelector(
  selectAll,
  (state: StarwarsContent[]) => {
    const result = [...state];
    result.sort((a: StarwarsContent, b: StarwarsContent) => {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    const newArray: StarwarsContent[] = [];

    result.forEach(({ name }, index: number) => {
      if (index === 0) {
        newArray.push({name: result[index].name.charAt(0), uid: result[index].name.charAt(0), url: ""});
      }
      const firstLetter = name.charAt(0).toLowerCase();
      if ((result[index-1]) && firstLetter !== result[index-1].name.charAt(0).toLowerCase()) {
        newArray.push({name: result[index].name.charAt(0).toLowerCase(), uid: result[index].name.charAt(0).toLowerCase(), url: ""});
      }
      newArray.push(result[index]);
    });
    return newArray;
  }
);
