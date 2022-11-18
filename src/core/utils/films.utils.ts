import { FavoriteToSave } from "src/shared/models/starwars.model";

export const getFilmFavoriteToggleTooltip = (favorited?: FavoriteToSave) => {
  let tooltip: string = '';

  if (favorited?.isCurrentFavorite) {
    tooltip = 'Remove from Favorites';
  } else {
    tooltip = 'Add to Favorites';
  }

  if (favorited?.lastUpdated) {
    tooltip = tooltip + '. ' + (favorited.isCurrentFavorite ? 'Favorited ' : 'Unfavorited ') + 'on ' + new Date(favorited.lastUpdated);
  }

  return tooltip;
};