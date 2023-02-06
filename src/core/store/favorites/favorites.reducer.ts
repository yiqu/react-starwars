import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { FavoriteToSave } from 'src/shared/models/starwars.model';
import { FetchProp } from '../all-films/films.state';

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
});
