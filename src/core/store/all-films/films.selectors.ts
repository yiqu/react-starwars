import { RootState } from "src/store/appStore";
import * as fromFilmsReducer from './films.reducer';

const allFilmsSlice = (state: RootState) => {
  return state.allFilms;
};

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  fromFilmsReducer.adapter.getSelectors((state: RootState) => state.allFilms);

export const selectLoading = (state: RootState) => {
  return allFilmsSlice(state).apiLoading;
};

export const selectFirstTimeLoading = (state: RootState) => {
  return allFilmsSlice(state).firstTimeLoading;
};

export const selectApiUrl = (state: RootState) => {
  return allFilmsSlice(state).apiUrl;
};

export const selectApiParams = (state: RootState) => {
  return allFilmsSlice(state).apiParams;
};