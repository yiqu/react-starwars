import { createSelector, createDraftSafeSelector } from "@reduxjs/toolkit";
import { HttpParams } from "src/shared/models/http.model";
import { StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import { adapter } from "./core.reducer";

const coreEntitiesSlice = (state: RootState) => {
  return state.coreEntities;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors((state: RootState) => state.coreEntities);