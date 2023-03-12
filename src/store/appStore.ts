import { configureStore } from '@reduxjs/toolkit';
import { allFilmsSlice } from 'src/core/store/all-films/films.reducer';
import charactersReducer from 'src/core/store/characters/characters.reducer';
import coreOthersReducer from 'src/core/store/core-others/core-others.reducer';
import { favoriteFilmslice } from 'src/core/store/favorites/favorites.reducer';
import planetsReducer from 'src/core/store/planets/planets.reducer';

export const appStore = configureStore({
  reducer: {
    allFilms: allFilmsSlice.reducer,
    favoriteFilms: favoriteFilmslice.reducer,
    characters: charactersReducer,
    planets: planetsReducer,
    coreOthers: coreOthersReducer
  },
  devTools: {
    trace: true
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
