import React, { useContext } from "react";
import { Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import { FavoriteMoviesObjList, FavoriteToSave, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import MovieCard from "./MovieCard";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorPage from "src/404/ErrorPage";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { starwarsFilmsApi, useFetchFilmsQuery } from "src/core/store/sw-films/swapi-films.api";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import CircularProgress from '@mui/material/CircularProgress';
import { RefreshOutlined } from "@mui/icons-material";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import DateToNow from "src/shared/components/date/DateToNow";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import { Tooltip as Tooltip2 } from 'react-tooltip';
import { starwarsFavoritesApi, useFetchFavoritesQuery } from "src/core/store/favorites/favorites.api";

const userId = 'yqu';
const ENTITY_NAME = "films";


const Movies = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);
  const { data: favorites, isLoading: isFavLoading, isFetching: isFavFetching } = useFetchFavoritesQuery();
  const { data, dataWithFavs, isLoading, isFetching, fulfilledTimeStamp, startedTimeStamp, refetch, isError, error } = useFetchFilmsQuery(undefined, {
    selectFromResult: (data) => {
      return {
        ...data,
        dataWithFavs: data.data?.map((film) => {
          const fav = favorites?.find((fav) => {
            return fav.episodeId === film.properties.episode_id;
          });
          return {
            ...film,
            favorite: fav
          };
        }).sort((x, y) => {
          return x.properties.episode_id > y.properties.episode_id ? 1 : -1;
        })
      };
    }
  });
  
  const fetchTimeDuration = (fulfilledTimeStamp ?? 0) - (startedTimeStamp ?? 0);
  

  const filmPageDisplayToggleHandler = () => {
    const nextDisplayMode = {
      moviePageDisplayMode: getNextDisplayState(filmPageDisplayMode)
    };
    setSearchParams(nextDisplayMode);
  };

  const onResultSelectHandler = (selection: ResultProperty<any> | null) => {
    navigate(`./${selection?.uid}`);
  };

  const handleRefreshFilms = () => {
    dispatch(starwarsFilmsApi.util.invalidateTags([{type: "Films"}]));
  };

  const handleRefreshFavorites = () => {
    dispatch(starwarsFavoritesApi.util.invalidateTags([{type: 'Favorites'}]));
  };

  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ ENTITY_NAME } />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!dataWithFavs) {
    return <></>;
  }

  return (
    <Stack direction="column" width="100%">
      <AppToolbar toolbarProps={ {
        position: "sticky",
        sx: {top: isMobile ? '56px':'64px'}
      } }>
        <Grid container xs={ 12 }>
          <Grid xs={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center" width="100%">
              <SearchAutoComplete entity={ ENTITY_NAME } onResultSelect={ onResultSelectHandler } />
            </Stack>
          </Grid>
          <Grid xs={ 8 } xsOffset="auto" display="flex">
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
              { isFetching && <CircularProgress size={ 20 } /> }
              { !isFetching && <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp ?? 0 } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> }
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFavorites }>
                Refresh Favorites
              </Button>
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFilms }>
                Refresh Films
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'med' }>
          { dataWithFavs?.map((film) => {
            return (
              <Grid key={ film.properties.episode_id } xs={ 12 } sm={ 8 } smOffset={ 2 } mb={ 3 }>
                <MovieCard 
                  userId={ userId }
                  film={ film.properties }
                  favoriteData = { film.favorite }
                  uid={ film.uid }
                  allFavoritesLoading={ isFavLoading }
                  favToggleLoading={ isFavFetching } />
              </Grid>
            );
          }) }
        </LayoutWithGutter>
      </Box>
      <Tooltip2 id="fetch-information" place="bottom" offset={ 30 }>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box>
            Last fetched: <DateDisplay2 dateInMilli={ fulfilledTimeStamp } /> ( <DateToNow dateInMilli={ fulfilledTimeStamp } /> ago ).
          </Box>
        </Stack>
      </Tooltip2>
    </Stack>
  );
};

export default Movies;

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};
