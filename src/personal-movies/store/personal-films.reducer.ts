import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonalFilmConfig } from './personal-films.state';
import { QueryFilter } from '../all/PersonalFilmsTableFilter';
import { personalFilmsApi } from './personal-films.api';
import { toast } from 'react-hot-toast';

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
    builder.addMatcher(personalFilmsApi.endpoints.updatePersonalFilm.matchPending, (state, action) => {
      toast("Updating");
    });
    builder.addMatcher(personalFilmsApi.endpoints.updatePersonalFilm.matchFulfilled, (state, action) => {
      toast.dismiss();
      toast.success(`${action.payload.title} updated successfully!`);
    });
    builder.addMatcher(personalFilmsApi.endpoints.updatePersonalFilm.matchRejected, (state, action) => {
    });
  }
});

export const { updateFilters } = personalFilmsConfigSlice.actions;
export default personalFilmsConfigSlice.reducer;