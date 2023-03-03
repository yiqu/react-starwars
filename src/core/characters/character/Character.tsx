import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC, Suspense, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Await, defer, Link, LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom";
import urlcat from "urlcat";
import { HttpResponse, HttpResponse2, StarwarCharacter, StarwarsContent, StarwarsPlanet } from "src/shared/models/starwars.model";
import CharacterDetailCard from "./CharacterCard";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { fetchHomeWorld } from "src/core/store/characters/characters.thunks";
import * as fromCharactersSelectors from '../../store/characters/characters.selectors';
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import Planet from "src/core/planets/planet/Planet";
import { resetCurrentCharacterHomeWorld } from "src/core/store/characters/characters.actions";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";

export interface CharacterProps {
  loadedCharacter: StarwarCharacter;
}

export const Character: FC<CharacterProps> = ({ loadedCharacter }: CharacterProps) => {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const isHomePlanetLoading: boolean = useAppSelector(fromCharactersSelectors.characterHomePlanetLoading); 
  const homePlanet: StarwarsPlanet | undefined = useAppSelector(fromCharactersSelectors.characterHomePlanet); 

  useEffect(() => {
    dispatch(fetchHomeWorld({url: loadedCharacter.homeworld}));
  }, [dispatch, loadedCharacter.homeworld]);

  useEffect(() => {
    return () => {
      dispatch(resetCurrentCharacterHomeWorld());
    };
  }, [dispatch]);

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
          <Typography variant='h4' sx={ {fontWeight: 500, mb: 2} }>
            { loadedCharacter.name }
          </Typography>

          <Stack direction="column" spacing={ 1 }>
            <Typography variant='h5' >
              Physical Description
            </Typography>
            <Divider  />
          </Stack>         
          

          <Typography variant='body2' fontWeight={ 300 }>
            { `${loadedCharacter.name} was born ${loadedCharacter.birth_year} with ${loadedCharacter.skin_color} 
                          skin color and ${loadedCharacter.eye_color} eyes.` }
          </Typography>

          <Stack direction="column" spacing={ 1 }>
            <Stack direction="row" spacing={ 1 }  pt={ 2 }>
              <Typography variant='h5' >
                Home Planet Properties
              </Typography>
              { isHomePlanetLoading && <ProgressCircle size={ 15 } styleProps={ {justifyContent: 'center', alignItems: 'center'} } color="#092250"  />}
            </Stack>            
            <Divider />
          </Stack>

          { isHomePlanetLoading ? (<LoadingLogo message="home planet" />) : (
            homePlanet && <Planet planet={ homePlanet } />
          )}

        </Stack>
      </Grid>
    </Grid>
  );
};

export default Character;
