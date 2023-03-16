import { EntityHttpParams } from "src/shared/models/http.model";

export interface SwapiApiState {
  selectedEntity?: string;
  lastApiFetchDate?: number;
  entityData: {
    [entityId: string]: EntityHttpParams;
  }
}