import { FavoriteToSave } from "src/shared/models/starwars.model";
import moment from 'moment';

export const getFilmFavoriteToggleTooltip = (favorited?: FavoriteToSave) => {
  let tooltip: string = '';
  const dateFromNow = favorited?.lastUpdated ? (moment(favorited?.lastUpdated).fromNow()) : ('');

  if (favorited?.isCurrentFavorite) {
    tooltip = 'Remove from favorites';
  } else {
    tooltip = 'Add to favorites';
  }

  if (favorited?.lastUpdated) {
    tooltip = tooltip + '. ' + (favorited.isCurrentFavorite ? 'Favorited ' : 'Unfavorited ') + dateFromNow;
  }

  return tooltip;
};