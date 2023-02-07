import { createAction } from '@reduxjs/toolkit';
import { map } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { HttpParams } from 'src/shared/models/http.model';
import { HttpResponse2List, ResultProperty, StarwarsFilm } from 'src/shared/models/starwars.model';
import { allFilmsSlice } from './films.reducer';

export const { fetchFailure, fetchPayloadSuccess, setValidating, setLoading, setUrl, setParams2 } = allFilmsSlice.actions;

/**
 * NOT USED - Using SWR
 * @param params 
 * @returns 
 */
export const fetchAllFilmsThunk = (params: any) => {
  return (dispatch: any, getState: any) => {

    ajax<HttpResponse2List<ResultProperty<StarwarsFilm>>>('https://www.swapi.tech/api/films')
      .pipe(
        map((res: AjaxResponse<HttpResponse2List<ResultProperty<StarwarsFilm>>>) => {
          return res.response;
        })
      )
      .subscribe({
        next: (res) => {

        },
        error: (err) => {
          
        },
      });
  };
};
