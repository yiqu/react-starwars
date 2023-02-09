import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { lastValueFrom, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { BASE_FIREBASE_URL } from 'src/shared/api/endpoints';
import { HttpParams } from 'src/shared/models/http.model';
import { FavoriteMoviesObjList, FavoriteToSave } from 'src/shared/models/starwars.model';
import { transformFirebaseData } from 'src/shared/utils/firebase';
import urlcat from 'urlcat';
import { FetchProp } from '../all-films/films.state';
import { FulfilledAction, PendingAction, RejectedAction } from './favorites.state';
import { fetchFavoritesSwitchThunk, fetchFavoritesThunk } from './favorites.thunks';

export interface FavoritesEntityState extends EntityState<FavoriteToSave> {
  firstTimeLoading?: boolean;
  loading?: boolean;
  error?: boolean;
  errMsg?: string;
  lastFetchedData?: number;
}

export function selectIdentifer(config: FavoriteToSave) {
  return config.fireId!;
}

export function comparator(a: FavoriteToSave, b: FavoriteToSave): number {
  if (+a.lastUpdated > +b.lastUpdated) {
    return 1;
  }
  return -1;
}

export const adapter = createEntityAdapter<FavoriteToSave>({
  selectId: selectIdentifer,
  sortComparer: comparator
});

export const favoriteFilmslice = createSlice({
  name: 'favoriteFilms',
  initialState: adapter.getInitialState<Partial<FavoritesEntityState>>({
    firstTimeLoading: true
  }),

  reducers: {
    getFavoritesStart: (state) => {
      state.loading = true;
    },

    getFavoritesSuccess: (state, action: PayloadAction<FavoriteToSave[]>) => {
      adapter.setAll(state, action.payload);
      state.loading = false;
      state.firstTimeLoading = false;
    },

    getFavoritesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesThunk.fulfilled, (state, action: FulfilledAction<HttpParams, FavoriteMoviesObjList>) => {
      const dataList: FavoriteToSave[] = transformFirebaseData(action.payload);
      adapter.setAll(state, dataList);
      state.loading = false;
      state.firstTimeLoading = false;
    });

    builder.addCase(fetchFavoritesThunk.pending, (state, action: PendingAction<HttpParams>) => {
      state.loading = true;
    });
    
    builder.addCase(fetchFavoritesThunk.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchFavoritesSwitchThunk.pending, (state, action: PendingAction<HttpParams | undefined>) => {
      state.loading = true;
    });

    builder.addCase(fetchFavoritesSwitchThunk.fulfilled, (state, action: FulfilledAction<HttpParams | undefined, FavoriteMoviesObjList>) => {
      const dataList: FavoriteToSave[] = transformFirebaseData(action.payload);
      adapter.setAll(state, dataList);
      state.loading = false;
      state.firstTimeLoading = false;
      state.error = false;
      state.errMsg = undefined;
    });

    builder.addCase(fetchFavoritesSwitchThunk.rejected, (state, action) => {
      if (action.error.name !== 'AbortError') {
        state.loading = false;
        state.error = true;
        state.errMsg = action.error.message;
      }
    });
  }
});


