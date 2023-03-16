import { createSelector } from "@reduxjs/toolkit";
import { Pagination } from "src/shared/models/http.model";
import { RootState } from "src/store/appStore";

const swapiConfigSlice = (state: RootState) => {
  return state.swapiConfig;
};


