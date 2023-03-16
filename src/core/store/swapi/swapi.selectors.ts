import { createSelector } from "@reduxjs/toolkit";
import { Pagination } from "src/shared/models/http.model";
import { RootState } from "src/store/appStore";

const swapiConfigSlice = (state: RootState) => {
  return state.swapiConfig;
};

export const selectPage = createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination.page;
  }
);

export const selectTotalPages = createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination.total_pages ?? 0;
  }
);

export const selectTotalRecords = createSelector(
  swapiConfigSlice,
  (slice): number => {
    return slice.pagination.total_records ?? 0;
  }
);

export const selectNextPageUrl = createSelector(
  swapiConfigSlice,
  (slice): string | null | undefined=> {
    return slice.pagination.next;
  }
);