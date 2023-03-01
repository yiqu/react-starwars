import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HttpResponse2, StarwarsPlanet } from 'src/shared/models/starwars.model';
import { CharactersState, UrlThunkParam } from './characters.state';
import { fetchHomeWorld } from './characters.thunks';
import { FulfilledAction, PendingAction } from 'src/shared/models/redux.model';

const initialState: CharactersState = {
  currentCharacterHomeWorld: undefined,
  apiLoading: false,
  error: false,
  errMsg: undefined,
  characterHomePlanetApiLoading: false,
  characterHomePlanetApiError: false,
  characterHomePlanetApiErrMsg: undefined
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetCurrentCharacterHomeWorld: (state) => {
      state.currentCharacterHomeWorld = undefined;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHomeWorld.pending, (state, action: PendingAction<UrlThunkParam | undefined>) => {
      state.characterHomePlanetApiLoading = true;
    });
    builder.addCase(fetchHomeWorld.fulfilled, (state, action: FulfilledAction<UrlThunkParam, HttpResponse2<StarwarsPlanet>>) => {
      state.characterHomePlanetApiLoading = false;
      state.characterHomePlanetApiError = false;
      state.characterHomePlanetApiErrMsg = undefined;
      state.currentCharacterHomeWorld = action.payload.result.properties;
    });
    builder.addCase(fetchHomeWorld.rejected, (state, action) => {
      state.characterHomePlanetApiLoading = false;
      state.characterHomePlanetApiError = true;
      state.characterHomePlanetApiErrMsg = action.error.message;
    });
  },
});

export default charactersSlice.reducer;