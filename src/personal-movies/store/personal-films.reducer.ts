import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonalFilmConfig } from './personal-films.state';
import { QueryFilter } from '../all/PersonalFilmsTableFilter';

const initialState: PersonalFilmConfig = {
  queryFilters: []
};

export const personalFilmsConfigSlice = createSlice({
  name: 'personal-films-config',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<QueryFilter[]>) => {
      state.queryFilters = action.payload;
    }
  },
  extraReducers: (builder) => {
  }
});

export const { updateFilters } = personalFilmsConfigSlice.actions;
export default personalFilmsConfigSlice.reducer;