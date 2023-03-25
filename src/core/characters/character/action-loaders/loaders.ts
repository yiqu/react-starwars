import { BASE_SW_API } from "src/shared/api/endpoints";
import urlcat from "urlcat";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import { defer, LoaderFunctionArgs } from "react-router-dom";
import { HttpResponse, StarwarsContent, HttpResponse2, StarwarCharacter } from "src/shared/models/starwars.model";


export function loader({ params }: LoaderFunctionArgs): Promise<StarwarCharacter> {
  const restUrl: string = urlcat(
    BASE_SW_API, `people/:id`, { id: params.characterId }
  );

  const people$ = ajax<HttpResponse2<StarwarCharacter>>(restUrl).pipe(
    delay(0),
    map((res) => {
      return res.response.result.properties;
    })
  );

  return firstValueFrom(people$);
}


export async function loaderWithPlanets({ params }: LoaderFunctionArgs) {
  const planetsUrl: string = urlcat(
    BASE_SW_API, `planets`, { limit: PAGE_LIMIT, page: PAGE_COUNT }
  );

  const planets$ = ajax<HttpResponse<StarwarsContent[]>>(planetsUrl).pipe(
    delay(0),
    map((res) => {
      return res.response.results;
    })
  );

  const restUrl: string = urlcat(
    BASE_SW_API, `people/:id`, { id: params.characterId }
  );

  const people$ = ajax<HttpResponse2<StarwarCharacter>>(restUrl).pipe(
    delay(0),
    map((res) => {
      return res.response.result.properties;
    })
  );

  return defer({
    character: await firstValueFrom(people$),
    planets: firstValueFrom(planets$),
  });
}