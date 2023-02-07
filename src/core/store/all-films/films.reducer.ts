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
  isValidating?: boolean;
  apiUrl?: string;
  apiParams?: HttpParams;

  isLoading: boolean;
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
  }),
  reducers: {

    setUrl: (state, action: PayloadAction<FetchProp>) => {
      state.apiUrl = action.payload.url;
    },

    setParams: (state, action: PayloadAction<HttpParams>) => {
      state.apiParams = action.payload;
    },

    setParams2: {
      reducer: (state, action: PayloadAction<HttpParams | undefined>) => {
        state.apiParams = action.payload;
      },
      prepare: (userInput?: HttpParams) => {
        return {
          payload: {
            ...userInput
          }
        };
      }
    },

    fetchPayloadSuccess: (state, action: PayloadAction<ResultProperty<StarwarsFilm>[]>) => {
      adapter.setAll(state, action.payload);
      state.error = false;
      state.errMsg = undefined;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setValidating: (state, action: PayloadAction<boolean>) => {
      state.isValidating = action.payload;
      state.lastValidationDate = new Date().getTime();
    },

    fetchFailure: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.errMsg = action.payload;
    },

  },
});
