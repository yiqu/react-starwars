import { FavoriteToSave, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import moment from 'moment';
import produce from 'immer';
import { Dictionary } from "@reduxjs/toolkit";


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

export const getSortedFilmsWithFavorited = (allFilms: ResultProperty<StarwarsFilm>[] | undefined, favorited: Dictionary<FavoriteToSave>): ResultProperty<StarwarsFilm>[] => {
  const result = produce((allFilms ?? []), (draft: ResultProperty<StarwarsFilm>[]) => {
    draft.sort((prev: ResultProperty<StarwarsFilm>, next: ResultProperty<StarwarsFilm>) => {
      return prev.properties.episode_id > next.properties.episode_id ? 1 : -1;
    });
    draft.forEach((res: ResultProperty<StarwarsFilm>) => {
      res.properties.favorite = favorited[res.properties.episode_id];
    });
  });

  return result;
};