import { favoriteFilmslice } from './favorites.reducer';


export const { getFavoritesFailure, getFavoritesStart, getFavoritesSuccess, setTriggerFetchTime,
  resetFirstTimeLoading } = favoriteFilmslice.actions;