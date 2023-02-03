import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { HttpParams } from 'src/shared/models/http.model';
import { HttpResponse2List, ResultProperty, StarwarsFilm } from 'src/shared/models/starwars.model';
import { FetchProp } from './films.state';

export interface AllFilmsEntityState extends EntityState<ResultProperty<StarwarsFilm>> {
  apiLoading?: boolean;
  apiUrl?: string;
  apiParams?: HttpParams;

  firstTimeLoading: boolean;
  error?: boolean;
  errMsg?: string;
  lastValidationDate?: number;
}

export function selectIdentifer(config: ResultProperty<StarwarsFilm>) {
  return config._id;
}

export function comparator(a: ResultProperty<StarwarsFilm>, b: ResultProperty<StarwarsFilm>): number {
  if (+a.uid > +b.uid) {
    return 1;
  }
  return -1;
}

export const adapter = createEntityAdapter<ResultProperty<StarwarsFilm>>({
  selectId: selectIdentifer,
  sortComparer: comparator
});

export const allFilmsSlice = createSlice({
  name: 'allFilms',
  initialState: adapter.getInitialState<Partial<AllFilmsEntityState>>({
    firstTimeLoading: true,
  }),
  reducers: {

    setUrl: (state, action: PayloadAction<FetchProp>) => {
      state.apiUrl = action.payload.url;
    },

    setParams: (state, action: PayloadAction<HttpParams>) => {
      state.apiParams = action.payload;
    },

    fetchPayloadSuccess: (state, action: PayloadAction<ResultProperty<StarwarsFilm>[]>) => {
      adapter.upsertMany(state, action.payload);
    },

    setFirstTimeLoading: (state, action: PayloadAction<boolean>) => {
      state.firstTimeLoading = action.payload;
    },

    setApiLoading: (state, action: PayloadAction<boolean>) => {
      state.apiLoading = action.payload;
      state.lastValidationDate = new Date().getTime();
    },

    fetchFailure: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.errMsg = action.payload;
    },

  },
});
