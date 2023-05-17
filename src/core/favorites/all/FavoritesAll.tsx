import { useAppDispatch, useAppSelector } from "src/store/appHook";
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, CircularProgress, Divider, FormControlLabel, FormGroup, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Switch, Tooltip, Typography } from "@mui/material";
import { favoritesTag, starwarsFavoritesApi, useFetchFavoritesQuery, useUpdateFavoriteMutation } from "src/core/store/favorites/favorites.api";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import ErrorPage from "src/404/ErrorPage";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import { Delete, DeleteOutline, FavoriteOutlined, RefreshOutlined } from "@mui/icons-material";
import useScreenSize from "src/shared/hooks/useIsMobile";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import React, { useState } from "react";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import { cloneDeep } from "lodash";
import toast from "react-hot-toast";
import { selectParams, selectShowCurrentFavoriteList } from "src/core/store/favorites/favorites.selectors";
import FavoriteItem from "./FavoriteCard";
import { toggleShowCurrentFavList, updateParams } from "src/core/store/favorites/favorites-config.reducer";

export default function FavoritesAll() {

  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  const [updateFavorite, result] = useUpdateFavoriteMutation();
  const favParams = useAppSelector(selectParams);
  const { data, onlyFavorites, isLoading, isFetching, isError, error, fulfilledTimeStamp, startedTimeStamp, refetch } = useFetchFavoritesQuery(favParams, {
    selectFromResult: (data) => {
      return {
        ...data,
        onlyFavorites: data.data?.filter((fav) => {
          return fav.isCurrentFavorite;
        })
      };
    }
  });
  const fetchTimeDuration = (fulfilledTimeStamp ?? 0) - (startedTimeStamp ?? 0);
  const showCurrentFavList: boolean = useAppSelector(selectShowCurrentFavoriteList);

  const handleToggleFavorite = (fav: FavoriteToSave) => {
    const toUpdate = cloneDeep(fav);
    if (toUpdate) {
      toUpdate.isCurrentFavorite = !toUpdate.isCurrentFavorite;
      toUpdate.lastUpdated = new Date().getTime();
      const update$ = updateFavorite(toUpdate);
      update$.then((res) => toast.success(`${toUpdate.isCurrentFavorite ? 'Added' : 'Removed'} Ep. ${toUpdate.episodeId} as favorites`));
    }
  };

  const handleRefreshFavorites = () => {
    const refresh$ = refetch();
    toast.promise(refresh$, {
      loading: 'Getting latest...',
      success: 'Successfully refreshed all favorites!',
      error: 'Error refreshing favorites'
    });
  };

  const handleRefreshWithParams = () => {
    dispatch(updateParams({time: `${new Date().getTime()}`}));
  };

  const handleShowCurrentFavToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleShowCurrentFavList(event.target.checked));
  };


  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ 'Favorites' } />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!onlyFavorites || !data) {
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
            </Stack>
          </Grid>
          <Grid xs={ 8 } xsOffset="auto" display="flex">
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="general-tooltip"
              data-tooltip-content={ `Refresh` }>
              { isFetching && <CircularProgress size={ 20 } /> }
              { !isFetching && <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp ?? 0 } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> }
              <Divider orientation="vertical" flexItem={ true } variant="middle" />
              <Stack direction="row" justifyContent="end" alignItems="center">
                <FormGroup>
                  <FormControlLabel control={ <Switch checked={ showCurrentFavList } onChange={ handleShowCurrentFavToggle } /> } label="Show Current Favorites" />
                </FormGroup>
                <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFavorites } sx={ {mr: 2} }>
                  Refresh
                </Button>
                <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshWithParams }>
                  Refresh with random params
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'skinny' }>
          {
            showCurrentFavList && (
              <>
                <Divider sx={ {width: '100%', alignItems: 'flex-start', mb: 4} }>Current Favorites</Divider>
          
                <List dense={ false } sx={ {width: '100%'} }>
                  {
                    onlyFavorites.map((fav) => {
                      return (
                        <React.Fragment key={ fav.fireId }>
                          <FavoriteItem isWorking={ !!fav.apiWorking } favorite={ fav } toggle={ handleToggleFavorite } />
                          <Divider variant="inset" component="li" />
                        </React.Fragment>
                      );})
                  }
                </List>
              </>
            )
          }

          <Divider sx={ {width: '100%', alignItems: 'flex-start', my: 4} }>All</Divider>

          <List dense={ false } sx={ {width: '100%'} }>
            { data.map((fav) => {
              return (
                <React.Fragment key={ fav.fireId }>
                  <FavoriteItem isWorking={ !!fav.apiWorking } favorite={ fav } toggle={ handleToggleFavorite } />
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              );
            }) }
          </List>

        </LayoutWithGutter>
      </Box>
    </Stack>
  );
};