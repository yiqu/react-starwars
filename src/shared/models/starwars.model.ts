export interface HttpResponse<T> {
  count?: number;
  next: string;
  previous: string;
  message: string;
  total_records: number;
  total_pages: number;
  results: T[];

  //
  result?: ResultProperty<T>[];
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
  __v: string;
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
  favorite?: FavoriteToSave;
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
  apiWorking?: boolean;
}

export interface FavoriteMoviesObjList {
  [key: string]: FavoriteToSave;
}

export interface MoviesFilterInput {
  movieName: string;
}

export interface StarwarsPeople {
  uid: string;
  name: string;
  url: string;
}

export interface StarwarsContent {
  uid: string;
  name: string;
  url: string;
}

export interface StarwarFilmPersonal {
  title: string;
  canon: boolean;
  characters: StarwarsContent[];
  director: string;
  fireId?: string;
  openingCrawl: string;
  planets: StarwarsContent;
  species: StarwarsContent[];
  starships: StarwarsContent[];
  vehicles: StarwarsContent[];
}

export interface StarwarCharacter {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}

export interface StarwarsPlanet {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}