import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StarwarsPlanet } from 'src/shared/models/starwars.model';
import { CharactersState } from './characters.state';

const initialState: CharactersState = {
  currentCharacterHomeWorld: undefined,
  apiLoading: false,
  error: false,
  errMsg: undefined,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCurrentCharacterHomeWorld: (state, action: PayloadAction<StarwarsPlanet>) => {
      state.currentCharacterHomeWorld = action.payload;
    }
  },

  extraReducers: (builder) => {
    
  },
});

export default charactersSlice.reducer;