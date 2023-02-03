/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import { Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { HttpParams } from "src/shared/models/http.model";
import { ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import FilterInput from "./filter/FilterInput";
import MovieCard from "./MovieCard";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { useSearchParams } from "react-router-dom";
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useDeepCompareEffect } from "react-use";
import { getSortedFilmsWithFavorited } from "src/core/utils/films.utils";
import LoadingBackdrop from "src/shared/loading-backdrop/LoadingBackdrop";
import SnackbarContext from "src/shared/context/snackbar/SnackbarContext";
import ErrorPage from "src/404/ErrorPage";
import { AXIOS_ERROR_CODE } from "src/shared/models/axios.model";
import * as fromAllFilmsSelectors from '../../store/all-films/films.selectors';
import { useAppSelector } from "src/store/appHook";


const userId = 'yqu';

const Movies = () => {
  const { showSnackbar } = useContext(SnackbarContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const { isMobile } = useScreenSize();

  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);

  const [fetchFavoriteTime, setFetchFavoriteTime] = useState<number>(0);
  const [fetchMoviesParams, setFetchMoviesParams] = useState<HttpParams>({});
  const [sortedFilms, setSortedFilms] = useState<ResultProperty<StarwarsFilm>[]>([]);

  const { data: favMovies, error: favError, loading: favLoading } = useFetchFavorites({userId: userId, params: {fetchTime: fetchFavoriteTime}});
  const { allFilms, allFilmsError, allFilmsLoading, allFilmsValidating } = useFetchMovies({ params: fetchMoviesParams });

  // using redux
  const films: ResultProperty<StarwarsFilm>[] = useAppSelector(fromAllFilmsSelectors.selectAll);

  /**
   * Sort the films by ID, and set favorites to true
   */
  useDeepCompareEffect(() => {
    setSortedFilms(getSortedFilmsWithFavorited(allFilms, favMovies));
  }, [allFilms, favMovies]);

  /**
   * Error handling
   */
  useEffect(() => {
    if (allFilmsError && allFilmsError.code !== AXIOS_ERROR_CODE.ERR_CANCELED) {
      showSnackbar("error", allFilmsError);
    }
  }, [allFilmsError, showSnackbar]);

  /**
   * Clean up - close any snackbars
   */
  useEffect(() => {
    return (() => {
      showSnackbar('info', undefined);
    });
  }, [showSnackbar]);

  const onReloadMoviesHandler = () => {
    setFetchFavoriteTime(new Date().getTime());
  };

  const onFilterChangeHandler = useCallback((movieName: string) => {
    if (movieName) {
      setFetchMoviesParams({
        title: movieName
      });
    } else {
      setFetchMoviesParams({});
    }
  }, []);

  const filmPageDisplayToggleHandler = () => {
    const nextDisplayMode = {
      moviePageDisplayMode: getNextDisplayState(filmPageDisplayMode)
    };
    setSearchParams(nextDisplayMode);
  };

  return (
    <>
      <AppToolbar toolbarProps={ {
        position:"sticky",
        sx:{top: isMobile ? '56px':'64px'}
      } }>
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Grid container xs={ 12 }>
                <Grid xs={ 8 }>
                  <FilterInput filterChange={ onFilterChangeHandler } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { allFilmsValidating && <ProgressCircle size={ 20 } /> }
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
                <IconButton onClick={ filmPageDisplayToggleHandler }>
                  { filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />) }
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      {
        <LoadingBackdrop isLoading={ allFilmsLoading }>
          {
            allFilmsError ? <ErrorPage reason={ 'Failed loading all films.' } debug={ allFilmsError } /> :
            (
              <Stack direction="column" p={ 2 } width="100%">
                <Grid container disableEqualOverflow rowSpacing={ 4 }>
                  { films?.map((film) => {
                    return (
                      <Grid key={ film.properties.episode_id } xs={ 12 } sm={ 4 } smOffset={ 4 }>
                        <MovieCard 
                          userId={ userId }
                          reloadMovies={ onReloadMoviesHandler }
                          film={ film.properties } 
                          uid={ film.uid }
                          allFavoritesLoading={ favLoading }
                           />
                      </Grid>
                    );
                  }) }
                </Grid>
              </Stack>
            )
          }
        </LoadingBackdrop>
      }
    </>
  );
};

export default Movies;

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};
