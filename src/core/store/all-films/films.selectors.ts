import { RootState } from "src/store/appStore";
import * as fromFilmsReducer from './films.reducer';

const allFilmsSlice = (state: RootState) => {
  return state.allFilms;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  fromFilmsReducer.adapter.getSelectors((state: RootState) => state.allFilms);

export const selectIsLoading = (state: RootState) => {
  return allFilmsSlice(state).isLoading;
};

export const selectIsValidating = (state: RootState) => {
  return allFilmsSlice(state).isValidating;
};

export const selectApiUrl = (state: RootState) => {
  return allFilmsSlice(state).apiUrl;
};

export const selectApiParams = (state: RootState) => {
  return allFilmsSlice(state).apiParams;
};

export const selectError = (state: RootState) => {
  return allFilmsSlice(state).errMsg;
};