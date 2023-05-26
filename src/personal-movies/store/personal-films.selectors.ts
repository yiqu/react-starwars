import { createSelector, createAction, createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store/appStore";
import { QueryFilter } from "../all/PersonalFilmsTableFilter";

const personalFilmsConfigSlice = (state: RootState) => {
  return state["personal-films-config"];
};


export const selectPersonalFilmsFilters = createSelector(
  personalFilmsConfigSlice,
  (state): QueryFilter[] => {
    return state.queryFilters;
  }
);