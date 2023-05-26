import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Box, CircularProgress, Typography, Button } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import { useCallback, useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay, { DisplayName } from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { useFetchStarshipsQuery } from "src/core/store/sw-entities-config/swapi";
import { selectPage, selectTotalPages } from "src/core/store/sw-entities-config/swapi.selectors";
import { dispatchPaging } from "src/core/store/sw-entities-config/swapi.reducer";
import { scrollToElementById } from "src/shared/utils/general.utils";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import { ResultProperty, StarwarsSearchable, StarwarsSpecie } from "src/shared/models/starwars.model";
import { useNavigate } from "react-router-dom";
import { personalFilmsApi, useFetchPersonalFilmsQuery } from "../store/personal-films.api";
import { PersonalFilm } from "../store/personal-films.state";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import PersonalFilmsTable from "./PersonalFilmsTable";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import { RefreshOutlined } from "@mui/icons-material";
import { selectPersonalFilmsFilters } from '../store/personal-films.selectors';


const ENTITY_NAME = "My Films";

function PersonalMoviesAll() {

  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectPersonalFilmsFilters);
  const { data, isFetching, isLoading, error, isSuccess, isError, refetch, fulfilledTimeStamp, startedTimeStamp } = useFetchPersonalFilmsQuery(filters, {
    refetchOnMountOrArgChange: 60 // time for args change or unmount
  });
  const fetchTimeDuration = (fulfilledTimeStamp ?? 0) - (startedTimeStamp ?? 0);

  useEffect(() => {
    scrollToElementById('top-pagination', 300, "end");
  }, [isSuccess]);

  const onResultSelectHandler = (selection: PersonalFilm | null) => {
    if (selection?.fireKey) {
      navigate(`./${selection.fireKey}`);
    }
  };

  const handleRefreshFilms = () => {
    dispatch(personalFilmsApi.util.invalidateTags([{type: "PersonalFilms"}]));
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
    return null;
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
              {/* <SearchAutoComplete entity={ ENTITY_NAME } onResultSelect={ onResultSelectHandler } /> */}
            </Stack>
          </Grid>
          <Grid xs={ 8 } xsOffset="auto" display="flex">
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
              { isFetching && <CircularProgress size={ 20 } /> }
              <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp ?? 0 } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> 
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFilms }>
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
          <PersonalFilmsTable films={ data } loading={ isFetching } />
        </LayoutWithGutter>
      </Box>
    </Stack>
  );
};

export default PersonalMoviesAll;
