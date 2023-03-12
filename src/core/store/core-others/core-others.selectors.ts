import { createSelector, createDraftSafeSelector } from "@reduxjs/toolkit";
import { HttpParams } from "src/shared/models/http.model";
import { StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import { adapter } from "./core-others.reducer";

const coreOthersSlice = (state: RootState) => {
  return state.characters;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.coreOthers);