import { createSlice, createAction } from '@reduxjs/toolkit';
import { ContentEntity, HttpResponse, HttpResponse2, StarwarsContent, StarwarsPlanet } from 'src/shared/models/starwars.model';
import { FulfilledAction, PendingAction } from 'src/shared/models/redux.model';
import {
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { HttpParams } from 'src/shared/models/http.model';

export interface CoreOthersEntityState extends EntityState<ContentEntity> {
}

export function selectIdentifer(config: ContentEntity) {
  return config.contentId;
}

export function comparator(a: ContentEntity, b: ContentEntity): number {
  if (+a.contentId > +b.contentId) {
    return 1;
  }
  return -1;
}

export const adapter = createEntityAdapter<ContentEntity>({
  selectId: selectIdentifer,
  sortComparer: comparator
});

export const coreOthersSlice = createSlice({
  name: 'otherCoreEntites',
  initialState: adapter.getInitialState<Partial<ContentEntity>>({
  }),
  reducers: {
  },
  extraReducers: (builder) => {

  },
});

export default coreOthersSlice.reducer;