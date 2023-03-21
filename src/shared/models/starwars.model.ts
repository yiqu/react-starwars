export interface HttpResponse<T> {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string;
  count?: number;
  next: string;
  results: T[];
  //
  result?: ResultProperty<T>[];
}

export interface HttpResponse2<T> {
  message: string;
  result: ResultProperty<T>;
}

export interface HttpSearchResponse<T> {
  message: string;
  result: ResultProperty<T>;
}

export interface HttpSearchResponses<T> {
  message: string;
  result: ResultProperty<T>[];
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

export interface GenericStarwarsContent {
  [id: string]: StarwarsContent[];
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

export interface StarwarsSearchable {
  name: string;
  url: string;
}

export interface StarwarContentGeneric {
  created: string;
  edited:  string;
  name:  string;
  url: string;
}

export interface StarwarCharacter extends StarwarContentGeneric {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export interface StarwarsPlanet extends StarwarContentGeneric {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
}

export interface StarwarsSpecie extends StarwarContentGeneric {
  classification: string
  designation: string;
  average_height: number;
  average_lifespan: number;
  hair_colors:string;
  skin_colors: string;
  eye_colors: string;
  homeworld: string;
  language: string;
  people: string[];
}

export interface StarwarsStarships extends StarwarContentGeneric {
  model: string;
  starship_class:  string;
  manufacturer:  string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed:  string;
  hyperdrive_rating: string;
  MGLT:  string;
  cargo_capacity: string;
  consumables:  string;
  pilots: string[];
}

export interface StarwarsVehicles extends StarwarContentGeneric {
  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[
  ];
  pilots: string[
  ];
}

export interface ContentEntity {
  contentId: string;
  apiLoading?: boolean;
  firstTimeLoading?: boolean;
  error?: boolean;
  errMsg?: string;
  totalCount?: number;
  data?: StarwarsContent[];
}