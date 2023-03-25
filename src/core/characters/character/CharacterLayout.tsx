import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, Suspense } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Await, defer, Link, LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { HttpResponse, HttpResponse2, StarwarCharacter, StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import useScreenSize from "src/shared/hooks/useIsMobile";
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

