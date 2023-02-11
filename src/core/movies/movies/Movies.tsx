/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import { Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { HttpParams } from "src/shared/models/http.model";
import { FavoriteMoviesObjList, FavoriteToSave, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
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
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavoriteFilmsActions from '../../store/favorites/favorites.actions';
import * as fromFavoriteFilmsSelectors from '../../store/favorites/favorites.selectors';
import * as fromAllFilmsActions from '../../store/all-films/films.actions';
import { fetchFavoritesThunk } from "src/core/store/favorites/favorites.thunks";


const userId = 'yqu';

const Movies = () => {
  const dispatch = useAppDispatch();
  const { showSnackbar } = useContext(SnackbarContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const { isMobile } = useScreenSize();

  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);

  const isFilmsLoading: boolean | undefined = useAppSelector(fromAllFilmsSelectors.selectIsLoading);
  const isFilmsValidating: boolean | undefined = useAppSelector(fromAllFilmsSelectors.selectIsValidating);
  const fetchFilmsError: any = useAppSelector(fromAllFilmsSelectors.selectError);
  const favoritesLoading: boolean | undefined = useAppSelector(fromFavoriteFilmsSelectors.selectIsLoading);
  const sortedFilms: ResultProperty<StarwarsFilm>[] = useAppSelector(fromAllFilmsSelectors.getAllFilmsWithFavorites);


  /**
   * Error handling
   */
  // useEffect(() => {
  //   if (allFilmsError && allFilmsError.code !== AXIOS_ERROR_CODE.ERR_CANCELED) {
  //     showSnackbar("error", allFilmsError);
  //   }
  // }, [allFilmsError, showSnackbar]);

  useEffect(() => {
    dispatch(fetchFavoritesThunk({user: 'yqu'}));
  }, [dispatch]);

  /**
   * Clean up - close any snackbars
   */
  useEffect(() => {
    return (() => {
      showSnackbar('info', undefined);
    });
  }, [showSnackbar]);


  const onFilterChangeHandler = useCallback((movieName: string) => {
    dispatch(fromAllFilmsActions.setParams2({title: movieName}));
  }, [dispatch]);

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
                  { isFilmsValidating && <ProgressCircle size={ 20 } /> }
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
        <LoadingBackdrop isLoading={ isFilmsLoading }>
          {
            fetchFilmsError ? <ErrorPage reason={ 'Failed loading all films.' } debug={ fetchFilmsError } /> :
            (
              <Stack direction="column" p={ 2 } width="100%">
                <Grid container disableEqualOverflow rowSpacing={ 4 }>
                  { sortedFilms?.map((film) => {
                    return (
                      <Grid key={ film.properties.episode_id } xs={ 12 } sm={ 4 } smOffset={ 4 }>
                        <MovieCard 
                          userId={ userId }
                          film={ film.properties } 
                          uid={ film.uid }
                          allFavoritesLoading={ favoritesLoading } />
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
