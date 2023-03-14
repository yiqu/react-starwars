
export interface HttpParams {
  [key: string]: any;
}

export interface EntityHttpParams {
  entity?: string;
  [key: string]: any;
}

export interface HttpParamsWithSearch {
  httpParams: HttpParams;
  extra?: HttpParams | 'NO_CHANGE';
}

export interface GetHookProps {
  url: string;
  params?: HttpParams;
}

export interface HttpEntityProp {
  entityType: string;
  params?: HttpParams;
  sleep?: number;
}