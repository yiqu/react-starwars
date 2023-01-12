/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import { saveFavorite, updateFavorite } from "src/core/fetchers/favorites";
import useFetchFavorites from "src/core/hooks/useFetchFavorites";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { HttpParams } from "src/shared/models/http.model";
import { FavoriteToSave, HttpResponse, HttpResponse2,
  HttpResponse2List, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import FilterInput from "./filter/FilterInput";
import MovieCard from "./MovieCard";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { createSearchParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import RefreshIcon from '@mui/icons-material/Refresh';
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useDeepCompareEffect } from "react-use";
import { getSortedFilmsWithFavorited } from "src/core/utils/films.utils";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingBackdrop from "src/shared/loading-backdrop/LoadingBackdrop";


const userId = 'yqu';

const Movies = () => {
  const arrOfItems = Array.from(Array(3).keys());

  const [saveFavLoading, setSaveFavLoading] = useState<boolean>(false);
  const [fetchFavoriteTime, setFetchFavoriteTime] = useState<number>(0);
  const [fetchMoviesParams, setFetchMoviesParams] = useState<HttpParams>({});
  const { isMobile } = useScreenSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);
  const [sortedFilms, setSortedFilms] = useState<ResultProperty<StarwarsFilm>[]>([]);
  
  const { data: favMovies, error: favError, loading: favLoading } = 
    useFetchFavorites({userId: userId, params: {fetchTime: fetchFavoriteTime}});

  const { allFilms, allFilmsError, allFilmsLoading, allFilmsValidating } = 
    useFetchMovies({ params: fetchMoviesParams });

  const filmPageDisplayToggleHandler = () => {
    const nextDisplayMode = {
      moviePageDisplayMode: getNextDisplayState(filmPageDisplayMode)
    };
    setSearchParams(nextDisplayMode);
  };

  useDeepCompareEffect(() => {
    setSortedFilms(getSortedFilmsWithFavorited(allFilms, favMovies));
  }, [allFilms, favMovies]);

  const onFavoriteToggleHandler = (film: StarwarsFilm, currentFavoriteStatus?: FavoriteToSave) => {
    const { url: filmUrl } = film;
    const filmId = (filmUrl.split("/"))[filmUrl.split("/").length - 1];

    const favorite: FavoriteToSave = {
      filmUrl,
      filmId,
      lastUpdated: new Date().getTime(),
      episodeId: film.episode_id,
      isCurrentFavorite: true,
    };

    setSaveFavLoading(true);
    // update current favorited item in DB to false status
    if (currentFavoriteStatus) {
      favorite.isCurrentFavorite = !currentFavoriteStatus.isCurrentFavorite;
      favorite.fireId = currentFavoriteStatus.fireId;
      updateFavorite(userId, favorite).then((res) => {
      }).catch((err) => {

      }).finally(() => {
        setSaveFavLoading(false);
        setFetchFavoriteTime(new Date().getTime());
      });

    } else {
      // create new favorited item to save
      saveFavorite(userId, favorite).then((res) => {
      }).catch((err) => {
        // toast error
      }).finally(() => {
        // show toast save done
        setSaveFavLoading(false);
        setFetchFavoriteTime(new Date().getTime());
      });
    }
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
                <Grid xs={ 10 }>
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
            allFilmsError ? <div>Error Page</div> :
            (
              <Stack direction="column" p={ 2 } width="100%">
                <Grid container disableEqualOverflow rowSpacing={ 4 }>
                  { sortedFilms?.map((res) => {
                    return (
                      <Grid key={ res.properties.episode_id } xs={ 12 } sm={ 4 } smOffset={ 4 }>
                        <MovieCard 
                          film={ res.properties } 
                          onFavoriteToggle={ onFavoriteToggleHandler } 
                          favorited={ favMovies[res.properties.episode_id] } 
                          uid={ res.uid } />
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
