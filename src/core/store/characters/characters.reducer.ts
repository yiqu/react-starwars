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
  totalCharacters: number;
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
    builder.addCase(fetchCharacters.pending, (state, action: PendingAction<HttpParams | undefined>) => {
      state.apiLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action: FulfilledAction<HttpParams | undefined, HttpResponse<StarwarsContent>>) => {
      if (action.payload.results) {
        adapter.setAll(state, action.payload.results);
      } else if (action.payload.result) {
        const chars = action.payload.result?.map((char) => {
          return {
            name: char.properties.name,
            uid: char.uid,
            url: char.properties.url
          };
        });
        adapter.setAll(state, chars);
      }
      state.totalCharacters = action.payload.total_records;
      state.apiLoading = false;
      state.firstTimeLoading = false;
      state.errMsg = undefined;
      state.error = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.apiLoading = false;
      state.errMsg = action.error.message;
      state.error = true;
    });
  },
});

export default charactersSlice.reducer;