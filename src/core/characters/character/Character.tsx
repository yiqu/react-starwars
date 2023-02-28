import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, Suspense, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Await, defer, Link, LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom";
import urlcat from "urlcat";
import { HttpResponse, HttpResponse2, StarwarCharacter, StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import CharacterDetailCard from "./CharacterCard";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { useAppDispatch } from "src/store/appHook";
import { fetchHomeWorld } from "src/core/store/characters/characters.thunks";

export interface CharacterProps {
  loadedCharacter: StarwarCharacter;
}

export const Character: FC<CharacterProps> = ({ loadedCharacter }: CharacterProps) => {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeWorld({url: loadedCharacter.homeworld}));
  }, [dispatch, loadedCharacter.homeworld]);

  return (
    <Grid xs={ 12 } container 
      justifyContent="space-between"
      alignItems="start"
      flexDirection={ { xs: 'column', sm: 'row' } } columnSpacing={ {md: 2} }>

      <Grid xs={ 12 } sm={ 4.3 } sx={ { mb: isMobile ? 2: 0 } }>
        <CharacterDetailCard character={ loadedCharacter } />
      </Grid>
      <Grid xs={ 12 } sm={ 7.1 }>
        <Stack direction="column" spacing={ 2 }>
          <Typography variant='h4' sx={ {fontWeight: 500} }>
            { loadedCharacter.name }
          </Typography>
          <Divider  />
          <Typography variant='body1'>
            { `${loadedCharacter.name} was born ${loadedCharacter.birth_year} with ${loadedCharacter.skin_color} 
                          skin color and ${loadedCharacter.eye_color} eyes.` }
          </Typography>
                        
          <Typography variant='h5' pt={ 2 }>
            Home Planet
          </Typography>
          <Divider  />

        </Stack>
                        
      </Grid>
    </Grid>
  );
};

export default Character;
