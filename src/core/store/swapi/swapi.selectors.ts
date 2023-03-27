import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store/appStore";

const swapiConfigSlice = (state: RootState) => {
  return state.swapiConfig;
};

export const selectPage = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination[entityId]?.pagination?.page ?? 1;
  }
);

export const selectTotalPages = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination[entityId]?.pagination?.total_pages ?? 0;
  }
);

export const selectTotalRecords = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination[entityId]?.pagination?.total_records ?? 0;
  }
);

export const selectNextPageUrl = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): string | null | undefined=> {
    return slice.pagination[entityId].pagination.next;
  }
);