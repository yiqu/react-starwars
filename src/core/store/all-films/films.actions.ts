import { map } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { HttpResponse2List, ResultProperty, StarwarsFilm } from 'src/shared/models/starwars.model';
import { allFilmsSlice } from './films.reducer';

export const { fetchFailure, fetchPayloadSuccess, setApiLoading, setFirstTimeLoading, setUrl } = allFilmsSlice.actions;

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
