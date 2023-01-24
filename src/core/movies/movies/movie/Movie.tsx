/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useParams, Params, useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
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
import axios, { AxiosError, AxiosResponse } from 'axios';
import urlcat from "urlcat";
import { ajax } from 'rxjs/ajax';
import { map, catchError, of, lastValueFrom } from 'rxjs';


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
            <Stack direction="column">
              <Typography variant='h4'>
                { movieData.title }
              </Typography>
              <Divider sx={ {my: 2} } />
              <Box>
                <Typography variant='body1'>
                  { movieData.opening_crawl }
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