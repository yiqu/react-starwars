import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Box, Button, CircularProgress, Typography } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import { useCallback, useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay, { DisplayName } from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { planetsTag, starwarsContentApi, useFetchPlanetsQuery, useFetchStarshipsQuery } from "src/core/store/sw-entities-config/swapi";
import { selectPage, selectTotalPages } from "src/core/store/sw-entities-config/swapi.selectors";
import { dispatchPaging } from "src/core/store/sw-entities-config/swapi.reducer";
import { scrollToElementById } from "src/shared/utils/general.utils";
import SearchAutoComplete from "src/core/shared/search/SearchAutoComplete";
import { ResultProperty, StarwarsSearchable, StarwarsSpecie } from "src/shared/models/starwars.model";
import { useNavigate } from "react-router-dom";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import { RefreshOutlined } from "@mui/icons-material";
import toast from "react-hot-toast";

const ENTITY_NAME = "planets";

function PlanetsAll() {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const page: number = useAppSelector(selectPage(ENTITY_NAME));
  const totalPages: number = useAppSelector(selectTotalPages(ENTITY_NAME));
  const { data, isFetching, isLoading, error, isSuccess, isError, refetch, fulfilledTimeStamp, startedTimeStamp } = useFetchPlanetsQuery({ 
    entity: ENTITY_NAME, 
    pagination: { page }
  });
  const fetchTimeDuration = (fulfilledTimeStamp ?? 0) - (startedTimeStamp ?? 0);
  const navigate = useNavigate();
  
  useEffect(() => {
    scrollToElementById('top-pagination', 300, "end");
  }, [isSuccess]);

  const onPageHandler = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(dispatchPaging({entityId: ENTITY_NAME, pagination: {page: page}}));
  };

  const onResultSelectHandler = (selection: ResultProperty<StarwarsSearchable> | null) => {
    navigate(`./${selection?.uid}`);
  };

  const handleRefresh = () => {
    dispatch(dispatchPaging({entityId: ENTITY_NAME, pagination: {page: 1}}));
    const refresh$ = refetch();
    toast.promise(refresh$, {loading: 'Refreshing...', success: 'Refreshed all Planets', error: 'Error!'});
  };

  const handleRefresh2 = () => {
    dispatch(starwarsContentApi.util.invalidateTags([{type: planetsTag, id: 'PARTIAL-LIST'}]));
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
          <Grid xs={ 4 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <SearchAutoComplete entity={ ENTITY_NAME } onResultSelect={ onResultSelectHandler } />
            </Stack>
          </Grid>
          <Grid xs={ 8 } xsOffset="auto" display="flex">
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
              { isFetching && <CircularProgress size={ 20 } /> }
              { !isFetching && <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp ?? 0 } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> }
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefresh2 }>
                Refresh
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <SimpleGridDisplay data={ data.results } itemUrlPath={ ENTITY_NAME } totalPages={ totalPages } page={ page } onPaged={ onPageHandler }
          totalRecords={ data.total_records } isFetching={ isFetching }  />
      </Box>
    </Stack>
  );
};

export default PlanetsAll;
