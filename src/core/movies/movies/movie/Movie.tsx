/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useParams, Params } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { HttpResponse2, StarwarFilmDetail } from "src/shared/models/starwars.model";
import Typography from '@mui/material/Typography';
import ErrorPage from 'src/404/ErrorPage';
import useFetch from 'src/shared/hooks/useFetch';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { Box, Button, Divider, Stack } from '@mui/material';
import MovieDetailCard from './MovieDetailCard';
import useScreenSize from 'src/shared/hooks/useIsMobile';

const Movie = () => {

  const params: Readonly<Params<string>> = useParams();
  const [ fetchTime, setFetchTime ] = useState<number>(0);
  const { payload, loading, error } = useFetch<HttpResponse2<StarwarFilmDetail>>({ url: `${BASE_SW_API}films/${params.movieId}`, params: {fetchTime: fetchTime}});
  const { isMobile } = useScreenSize();

  const refreshHandler= () => {
    setFetchTime(new Date().getTime());
  };


  if (loading) return (<Grid xs={ 12 } sm={ 8 } smOffset={ 2 } xsOffset={ 1 }> <LoadingSkeleton count={ 1 } /> </Grid>);
  if (!payload?.result) return (<Grid xs={ 12 } sm={ 8 } smOffset={ 2 } xsOffset={ 1 }> <ErrorPage reason={ 'Result is malformed' } debug={ 'No properties' } /> </Grid>);
  if (error) return (<Grid xs={ 12 } sm={ 8 } smOffset={ 2 } xsOffset={ 1 }> <ErrorPage reason={ 'Failed loading current film.' } debug={ error } /> </Grid>);

  return (
    <Grid xs={ 12 } container sx={ {p: 2} }>
      <Grid xs={ 12 } sm={ 8 } xsOffset={ 0 } smOffset={ 2 }>
        <Grid xs={ 12 } container 
            justifyContent="space-between"
            alignItems="center"
            flexDirection={ { xs: 'column', sm: 'row' } }>
          <Grid xs={ 12 } sm={ 5 } sx={ { mb: isMobile ? 2: 0 } }>
            <Stack direction="column">
              <MovieDetailCard movieDetail={ payload.result.properties } />
            </Stack>
          </Grid>
          <Grid xs={ 12 } sm={ 7 }>
            <Stack direction="column">
              <Typography variant='h4'>
                { payload.result.properties.title }
              </Typography>
              <Divider sx={ {my: 2} } />
              <Box>
                <Typography variant='body1'>
                  { payload.result.properties.opening_crawl }
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movie;