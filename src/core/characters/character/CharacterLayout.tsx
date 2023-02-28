import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, Suspense } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Await, defer, Link, LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { BASE_SW_API } from "src/shared/api/endpoints";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { HttpResponse, HttpResponse2, StarwarCharacter, StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import CharacterDetailCard from "./CharacterCard";
import useScreenSize from "src/shared/hooks/useIsMobile";
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import Character from "./Character";
import OtherPlanetsPanel from "./OtherPlanetsPanel";

export const CharacterLayout: FC = () => {

  const { isMobile } = useScreenSize();
  
  const deferredData = useLoaderData() as {
    character: Promise<StarwarCharacter>;
    planets: Promise<StarwarsContent[]>;
  };

  return (
    <Grid xs={ 12 } container sx={ {p: 2} }>
      <Grid xs={ 12 } sm={ 8 } xsOffset={ 0 } smOffset={ 2 }>
        <Stack direction="column" spacing={ 4 }>
          <Suspense fallback={ 'Loading...' }>
            <Await resolve={ deferredData.character }>
              { (loadedCharacter: StarwarCharacter) => {
                return (
                  <Character loadedCharacter={ loadedCharacter } />
                );
              } }
            </Await>
          </Suspense>
          
          <Divider />

          <Suspense fallback={ 'Loading...' }>
            <Await resolve={ deferredData.planets }>
              { (loadedPlanets: StarwarsContent[]) => {
                return (
                  <OtherPlanetsPanel loadedPlanets={ loadedPlanets } />
                );
              } }
            </Await>
          </Suspense>
          
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CharacterLayout;

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