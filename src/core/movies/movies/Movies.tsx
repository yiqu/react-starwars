/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import { Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useMemo, useState, useEffect } from "react";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { FavoriteMoviesObjList, FavoriteToSave, ResultProperty, StarwarsFilm } from "src/shared/models/starwars.model";
import FilterInput from "./filter/FilterInput";
import MovieCard from "./MovieCard";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { useNavigate, useSearchParams } from "react-router-dom";
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import LoadingBackdrop from "src/shared/loading-backdrop/LoadingBackdrop";
import SnackbarContext from "src/shared/context/snackbar/SnackbarContext";
import ErrorPage from "src/404/ErrorPage";
import * as fromAllFilmsSelectors from '../../store/all-films/films.selectors';
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavoriteFilmsSelectors from '../../store/favorites/favorites.selectors';
import { setParams2 } from "src/core/store/all-films";
import { starwarsFilmsApi, useFetchFilmsQuery } from "src/core/store/swapi-films/swapi-films";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import CircularProgress from '@mui/material/CircularProgress';
import { RefreshOutlined } from "@mui/icons-material";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import DateToNow from "src/shared/components/date/DateToNow";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import { Tooltip as Tooltip2 } from 'react-tooltip';

const userId = 'yqu';
const ENTITY_NAME = "films";


const Movies = () => {
  const dispatch = useAppDispatch();
  const { showSnackbar } = useContext(SnackbarContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);

  const isFilmsLoading: boolean | undefined = useAppSelector(fromAllFilmsSelectors.selectIsLoading);
  const isFilmsValidating: boolean | undefined = useAppSelector(fromAllFilmsSelectors.selectIsValidating);
  const fetchFilmsError: any = useAppSelector(fromAllFilmsSelectors.selectError);
  const favoritesLoading: boolean | undefined = useAppSelector(fromFavoriteFilmsSelectors.selectIsLoading);
  const favToggleLoading: boolean | undefined = useAppSelector(fromFavoriteFilmsSelectors.selectIsFavToggleLoading);
  const sortedFilms: ResultProperty<StarwarsFilm>[] = useAppSelector(fromAllFilmsSelectors.getAllFilmsWithFavorites);

  const { data, isLoading, isFetching, fulfilledTimeStamp, startedTimeStamp, refetch, isError, error } = useFetchFilmsQuery();
  const fetchTimeDuration = (fulfilledTimeStamp ?? 0) - (startedTimeStamp ?? 0);
  

  /**
   * Clean up - close any snackbars
   */
  useEffect(() => {
    return (() => {
      showSnackbar('info', undefined);
    });
  }, [showSnackbar]);


  const onFilterChangeHandler = useCallback((movieName: string) => {
    dispatch(setParams2({title: movieName}));
  }, [dispatch]);

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

  const handleRefreshFilms2 = () => {
    dispatch(starwarsFilmsApi.endpoints.fetchFilms.initiate(
      {forceRefetch: true}
    ));
  };

  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ ENTITY_NAME } />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!data) {
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
          <Grid xs={ 4 } xsOffset="auto" display="flex">
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
              { isFetching && <CircularProgress size={ 20 } /> }
              { !isFetching && <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> }
              
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFilms }>
                Refresh
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'med' }>
          { data?.map((film) => {
            return (
              <Grid key={ film.properties.episode_id } xs={ 12 } sm={ 8 } smOffset={ 2 } mb={ 3 }>
                <MovieCard 
                  userId={ userId }
                  film={ film.properties } 
                  uid={ film.uid }
                  allFavoritesLoading={ favoritesLoading }
                  favToggleLoading={ favToggleLoading } />
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

  // return (
  //   <>
  //     <AppToolbar toolbarProps={ {
  //       position:"sticky",
  //       sx:{top: isMobile ? '56px':'64px'}
  //     } }>
  //       <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
  //         <Grid xs={ 10 } sm={ 4 }>
  //           <Stack direction="row" justifyContent="start" alignItems="center">
  //             <Grid container xs={ 12 }>
  //               <Grid xs={ 8 }>
  //                 <FilterInput filterChange={ onFilterChangeHandler } />
  //               </Grid>
  //               <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
  //                 { isFilmsValidating && <ProgressCircle size={ 20 } /> }
  //               </Grid>
  //             </Grid>
  //           </Stack>
  //         </Grid>
  //         <Grid xs={ 2 } sm={ 8 }>
  //           <Stack direction="row" justifyContent="flex-end" alignItems="center">
  //             <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
  //               <IconButton onClick={ filmPageDisplayToggleHandler }>
  //                 { filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />) }
  //               </IconButton>
  //             </Tooltip>
  //           </Stack>
  //         </Grid>
  //       </Grid>
  //     </AppToolbar>

  //     {
  //       <LoadingBackdrop isLoading={ isFilmsLoading }>
  //         {
  //           fetchFilmsError ? <ErrorPage reason={ 'Failed loading all films.' } debug={ fetchFilmsError } /> :
  //           (
  //             <Stack direction="column" p={ 2 } width="100%">
  //               <Grid container disableEqualOverflow rowSpacing={ 4 }>
  //                 { sortedFilms?.map((film) => {
  //                   return (
  //                     <Grid key={ film.properties.episode_id } xs={ 12 } sm={ 4 } smOffset={ 4 }>
  //                       <MovieCard 
  //                         userId={ userId }
  //                         film={ film.properties } 
  //                         uid={ film.uid }
  //                         allFavoritesLoading={ favoritesLoading }
  //                         favToggleLoading={ favToggleLoading } />
  //                     </Grid>
  //                   );
  //                 }) }
  //               </Grid>
  //             </Stack>
  //           )
  //         }
  //       </LoadingBackdrop>
  //     }
  //   </>
  // );
};

export default Movies;

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};
