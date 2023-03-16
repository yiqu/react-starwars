import { Link, LoaderFunctionArgs, Outlet, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { delay, firstValueFrom, map } from "rxjs";
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { BASE_SW_API } from "src/shared/api/endpoints";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { Stack, Tooltip, IconButton, Typography, Button } from "@mui/material";
import ErrorPage from "src/404/ErrorPage";
import FilterInput from "src/core/movies/movies/filter/FilterInput";
import MovieCard from "src/core/movies/movies/MovieCard";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import LoadingBackdrop from "src/shared/loading-backdrop/LoadingBackdrop";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import { useCallback, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import SimpleGridDisplay from "src/core/shared/display/SimpleGridDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromplanetsSelectors from '../../store/planets/planets.selectors';
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import { EntityHttpParams, HttpParams, Pagination } from "src/shared/models/http.model";
import { useFetchEntityByIdQuery } from "src/core/services/api";
import { createApi, fetchBaseQuery, skipToken } from '@reduxjs/toolkit/query/react';

function CoreEntityLayout() {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const { coreEntityId } = useParams<string>();

  const onFilterChangeHandler = useCallback((charName: string) => {
    if (charName && charName.trim() !== '') {
    } else {
    }
  }, []);

  const onNextPageHandler = () => {
  };

  const onPrevPageHandler = () => {
  };

  if (false) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message="planets" />
    </Stack>
  );
  
  return (
    <Stack direction="column" width="100%">
      <AppToolbar toolbarProps={ {
        position:"sticky",
        sx:{top: isMobile ? '56px':'64px'}
      } }>
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Grid container xs={ 12 }>
                <Grid xs={ 8 }>
                  <FilterInput filterChange={ onFilterChangeHandler } currentText={ '' } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { false && <ProgressCircle size={ 20 } /> }
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      
      <div>
        <Button onClick={ onPrevPageHandler }>Previous</Button>
        <Button onClick={ onNextPageHandler }>Next</Button>
      </div>
      {/* <SimpleGridDisplay data={ [] } itemUrlPath="xxx" /> */}

      <Outlet />

    </Stack>
  );
};

export default CoreEntityLayout;
