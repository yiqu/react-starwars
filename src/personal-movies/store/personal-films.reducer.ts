import { createSlice } from '@reduxjs/toolkit';
import { PersonalFilmConfig } from './personal-films.state';

const initialState: PersonalFilmConfig = {
};

export const personalFilmsConfigSlice = createSlice({
  name: 'personal-films-config',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  }
});

//export const {  } = swapiFilmsSlice.actions;
export default personalFilmsConfigSlice.reducer;