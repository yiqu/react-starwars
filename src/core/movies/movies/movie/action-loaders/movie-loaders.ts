import { ajax } from 'rxjs/ajax';
import { map, catchError, of, lastValueFrom } from 'rxjs';
import { LoaderFunctionArgs } from 'react-router-dom';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { StarwarFilmDetail, HttpResponse2 } from 'src/shared/models/starwars.model';

/**
 * Route loader for fetching movie detail
 * @param props 
 * @returns Promise
 */
export function loader(props: LoaderFunctionArgs): Promise<StarwarFilmDetail> {
  const req = ajax.getJSON<HttpResponse2<StarwarFilmDetail>>(`${BASE_SW_API}films/${props.params.movieId}`).pipe(
    map((res: HttpResponse2<StarwarFilmDetail>) => {
      return res.result.properties;
    })
  );
  return lastValueFrom(req);
}