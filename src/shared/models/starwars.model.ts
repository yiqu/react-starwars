export interface HttpResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface HttpResponse2<T> {
  message: string;
  result: ResultProperty<T>;
}

export interface HttpResponse2List<T> {
  message: string;
  result: ResultProperty<T>[];
}

export interface ResultProperty<T> {
  properties: T;
  description: string;
  _id: string;
  uid: string;
}

export interface StarwarsFilm {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];

  // added on manually
  userFavorited?: boolean;
}

export interface StarwarsFilmCardProps {
  film: StarwarsFilm;
  favorited?: FavoriteToSave;
  onFavoriteToggle: (detail: StarwarsFilm, isCurrentlyFavorited?: FavoriteToSave) => void;
  uid: string;
}

export interface StarwarFilmDetail {
  title: string; 
  episode_id: number;
  opening_crawl: string;
  director: string; 
  producer: string; 
  release_date: string;
  characters: string[]; 
  planets: string[];
  starships: string[];
  vehicles: string[];  
  species: string[];  
  created: string;
  edited: string;
  url: string;
}

export interface FavoriteToSave {
  fireId?: string;
  filmUrl: string;
  filmId: string;
  isCurrentFavorite: boolean;
  lastUpdated: number;
  episodeId: number;
}

export interface FavoriteMoviesObjList {
  [key: string]: FavoriteToSave;
}