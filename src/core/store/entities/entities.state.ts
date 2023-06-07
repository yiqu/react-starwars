import { Pagination } from "src/shared/models/http.model";

export type EntityType = 'Species' | 'Starships' | 'Vehicles' | 'Planets' | 'People' | 'Characters';

export interface EntityFetchArg {
  url: string;
  entityId: EntityType;
}

export interface SwEntitiesState {
  pagination: {
    [entityId: string]: ContentPagination;
  };
}

export interface SearchContentQuery {
  entity: string;
  name: string;
}

export interface StarwarsSpecieEditable<T> {
  entityId: EntityType;
  editable: T;
}

export interface ContentPagination {
  pagination: Pagination;
  entityId: EntityType;
}