import { createSelector } from "@reduxjs/toolkit";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { RootState } from "src/store/appStore";
import { EntityType } from "./entities.state";

const swapiConfigSlice = (state: RootState) => {
  return state.swEntitiesConfig;
};


export const selectNextPageUrl = (entityId: EntityType) => createSelector(
  swapiConfigSlice,
  (slice): string | null | undefined=> {
    return slice.pagination[entityId]?.pagination.next;
  }
);

export const selectFetchPageUrl = (entityId: EntityType) => createSelector(
  swapiConfigSlice,
  (slice): string => {
    return slice.pagination[entityId]?.pagination.fetchUrl ?? `${BASE_SW_API}${entityId.toLowerCase()}?page=1&limit=10`;
  }
);