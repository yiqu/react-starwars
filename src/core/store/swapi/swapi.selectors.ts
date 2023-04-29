import { createSelector } from "@reduxjs/toolkit";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { Pagination } from "src/shared/models/http.model";
import { RootState } from "src/store/appStore";

const swapiConfigSlice = (state: RootState) => {
  return state.swapiConfig;
};

export const selectPagination = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): Pagination | undefined => {
    return slice.pagination[entityId]?.pagination;
  }
);

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
    return slice.pagination[entityId]?.pagination.next;
  }
);

export const selectFetchPageUrl = (entityId: string) => createSelector(
  swapiConfigSlice,
  (slice): string | undefined=> {
    return slice.pagination[entityId]?.pagination.fetchUrl ?? `${BASE_SW_API}${entityId}?page=1&limit=30`;
  }
);