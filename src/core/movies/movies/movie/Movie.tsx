import { Routes, Route, useParams, Params, useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { HttpResponse2, StarwarFilmDetail } from "src/shared/models/starwars.model";
import Typography from '@mui/material/Typography';
import ErrorPage from 'src/404/ErrorPage';
import { Box, Button, Divider, Stack } from '@mui/material';
import MovieDetailCard from './MovieDetailCard';
import useScreenSize from 'src/shared/hooks/useIsMobile';
import MovieDetailEntityTable from './EntityTable';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { startCase } from 'lodash';

const tables = ['characters', 'planets', 'species', 'starships', 'vehicles'];

const Movie = () => {

  const { isMobile } = useScreenSize();
  const movieData = useLoaderData() as StarwarFilmDetail;

  if (!movieData) return (<Grid xs={ 12 } sm={ 8 } smOffset={ 2 } xsOffset={ 1 }> <ErrorPage reason={ 'Result is malformed' } debug={ 'No properties' } /> </Grid>);

  return (
    <Grid xs={ 12 } container sx={ {p: 2} }>
      <Grid xs={ 12 } sm={ 8 } xsOffset={ 0 } smOffset={ 2 }>
        <Grid xs={ 12 } container 
            justifyContent="space-between"
            alignItems="center"
            flexDirection={ { xs: 'column', sm: 'row' } }>
          <Grid xs={ 12 } sm={ 5 } sx={ { mb: isMobile ? 2: 0 } }>
            <Stack direction="column">
              <MovieDetailCard movieDetail={ movieData } />
            </Stack>
          </Grid>
          <Grid xs={ 12 } sm={ 7 }>
            <Stack direction="column" spacing={ 2 }>
              <Typography variant='h4' sx={ {fontWeight: 500} }>
                { movieData.title }
              </Typography>
              <Divider sx={ {my: 2} } />
              <Box>
                <Typography variant='body1'>
                  { movieData.opening_crawl }
                </Typography>
              </Box>
              {
                tables.map((tab) => {
                  return (
                    <MovieDetailEntityTable columns={ ['id', 'detail'] } columnData={ movieData[tab as keyof StarwarFilmDetail] as any[] } key={ tab }
                      header={ <Typography
                        sx={ { display: 'flex', justifyContent: "start", alignItems: "center", pt: 2, pl: 2 } }
                        variant="h5"
                        component="div">
                        <SportsMartialArtsIcon sx={ {mr: 1} } />
                        <div style={ {fontFamily: 'Poppins'} }>
                          { startCase(tab) }
                        </div>
                      </Typography> }
                    />
                  );
                })
              }
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movie;

