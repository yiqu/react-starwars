import { createSelector, createAction, createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store/appStore";

const personalFilmsConfigSlice = (state: RootState) => {
  return state["personal-films-config"];
};


export const selectPersonalFilmsFilters = createSelector(
  personalFilmsConfigSlice,
  (state) => {
    return state.queryFilters;
  }
);