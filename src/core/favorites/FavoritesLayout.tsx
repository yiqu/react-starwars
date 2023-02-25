import { IconButton, Stack, Tooltip } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import FilterInput from "../movies/movies/filter/FilterInput";
import Grid from '@mui/material/Unstable_Grid2';
import { RefreshOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavSelectors from '../store/favorites/favorites.selectors';
import { fetchFavoritesParamsSwitchThunk, fetchFavoritesSwitchThunk, fetchFavoritesThunk } from "../store/favorites/favorites.thunks";
import { HttpParams } from "src/shared/models/http.model";
import { NO_CHANGE } from "../store/favorites/favorites.reducer";
import { resetFirstTimeLoading, setTriggerFetchTime } from "../store/favorites/favorites.actions";
import { useUpdateEffect } from "react-use";

const Favorites = () => {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const favCount: number = useAppSelector(fromFavSelectors.selectFavorited).length;
  const isLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsLoading);
  const extraFetchParams: HttpParams | undefined = useAppSelector(fromFavSelectors.selectExtraFetchParams);
  const triggerFetchTime: number = useAppSelector(fromFavSelectors.selectTriggerFetchTime);
  const [fetchTime, setFetchTime] = useState<number>(0);

  useEffect(() => {
    const promise = dispatch(fetchFavoritesParamsSwitchThunk({httpParams: {user: 'yqu'}, extra: NO_CHANGE}));
    return (() => {
      promise.abort();
    });
  }, [dispatch, fetchTime]);

  //?orderBy="episodeId"&startAt=1
  const onFilterChangeHandler = useCallback((userInput: string) => {
    const params = {
      orderBy: '"episodeId"',
      equalTo: `${userInput.trim()}`
    };
    dispatch(fetchFavoritesParamsSwitchThunk({httpParams: {user: 'yqu'}, extra: params}));
  }, [dispatch]);

  const refreshFavoritesHandler = () => {
    setFetchTime(new Date().getTime());
  };

  useEffect(() => {
    return () => {
      dispatch(resetFirstTimeLoading());
    };
  }, [dispatch]);

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
                  <FilterInput filterChange={ onFilterChangeHandler } count={ favCount } placeholderText={ 'Filter by EP number. e.g. 3' } 
                    currentText={ extraFetchParams ? extraFetchParams.equalTo : undefined } />
                </Grid>
                <Grid xs={ 2 } sx={ {display:'flex'} } justifyContent="center" alignItems="center">
                  { isLoading && <ProgressCircle size={ 20 } /> }
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Tooltip title="Refresh">
                <IconButton onClick={ refreshFavoritesHandler }>
                  <RefreshOutlined />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      <Stack direction="column" p={ 3 } width="100%">
        <Outlet />
      </Stack>

    </Stack>
  );
};

export default Favorites;