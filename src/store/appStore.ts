import { configureStore } from '@reduxjs/toolkit';
import { allFilmsSlice } from 'src/core/store/all-films/films.reducer';
import { favoriteFilmslice } from 'src/core/store/favorites/favorites.reducer';

export const appStore = configureStore({
  reducer: {
    allFilms: allFilmsSlice.reducer,
    favoriteFilms: favoriteFilmslice.reducer
  },
  devTools: {
    trace: true
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
