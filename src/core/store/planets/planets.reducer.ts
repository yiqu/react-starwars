import { createSlice, createAction } from '@reduxjs/toolkit';
import { HttpResponse, HttpResponse2, StarwarsContent, StarwarsPlanet } from 'src/shared/models/starwars.model';
import { FulfilledAction, PendingAction } from 'src/shared/models/redux.model';
import {
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { HttpParams } from 'src/shared/models/http.model';
import { fetchPlanets } from './planets.thunks';

export interface PlanetsEntityState extends EntityState<StarwarsContent> {
  apiLoading: boolean;
  firstTimeLoading?: boolean;
  error: boolean;
  errMsg?: string;
  extraFetchParams?: HttpParams;
  totalCount: number;
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

export const planetsSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState<Partial<PlanetsEntityState>>({
    firstTimeLoading: true,
    totalCount: 0
  }),
  reducers: {
  },
  extraReducers: (builder) => {

    // Get all characters
    builder.addCase(fetchPlanets.pending, (state, action: PendingAction<HttpParams | undefined>) => {
      state.apiLoading = true;
      state.extraFetchParams ={
        ...action.meta.arg
      };
    });
    builder.addCase(fetchPlanets.fulfilled, (state, action: FulfilledAction<HttpParams | undefined, HttpResponse<StarwarsContent>>) => {
      state.totalCount = action.payload.total_records;
      state.apiLoading = false;
      state.firstTimeLoading = false;
      state.errMsg = undefined;
      state.error = false;

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
    });
    builder.addCase(fetchPlanets.rejected, (state, action) => {
      state.apiLoading = false;
      state.errMsg = action.error.message;
      state.error = true;
    });
  },
});

export default planetsSlice.reducer;