import { createSlice, createAction } from '@reduxjs/toolkit';
import { HttpResponse, HttpResponse2, StarwarsContent, StarwarsPlanet } from 'src/shared/models/starwars.model';
import { UrlThunkParam } from './characters.state';
import { fetchCharacters, fetchHomeWorld } from './characters.thunks';
import { FulfilledAction, PendingAction } from 'src/shared/models/redux.model';
import {
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { HttpParams } from 'src/shared/models/http.model';

export interface FavoritesEntityState extends EntityState<StarwarsContent> {
  currentCharacterHomeWorld?: StarwarsPlanet;
  apiLoading: boolean;
  firstTimeLoading?: boolean;
  error: boolean;
  errMsg?: string;
  characterHomePlanetApiLoading: boolean;
  characterHomePlanetApiError: boolean;
  characterHomePlanetApiErrMsg?: string;
  extraFetchParams?: HttpParams;
}

export function selectIdentifer(config: StarwarsContent) {
  return config.uid;
}

export function comparator(a: StarwarsContent, b: StarwarsContent): number {
  if (+a.uid > +b.uid) {
    return 1;
  }
  return -1;
}

export const adapter = createEntityAdapter<StarwarsContent>({
  selectId: selectIdentifer,
  sortComparer: comparator
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState<Partial<FavoritesEntityState>>({
    firstTimeLoading: true
  }),
  reducers: {
    resetCurrentCharacterHomeWorld: (state) => {
      state.currentCharacterHomeWorld = undefined;
    }
  },
  extraReducers: (builder) => {

    // Get character's home planet
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

    // Get all characters
    builder.addCase(fetchCharacters.pending, (state, action: PendingAction<UrlThunkParam | undefined>) => {
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action: FulfilledAction<UrlThunkParam, HttpResponse<StarwarsContent>>) => {
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
    });
  },
});

export default charactersSlice.reducer;