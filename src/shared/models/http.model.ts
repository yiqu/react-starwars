
export interface HttpParams {
  [key: string]: any;
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