import { useParams } from "react-router-dom";
import { useFetchFavoriteQuery, useUpdateFavoriteMutation } from "src/core/store/favorites/favorites.api";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import ErrorPage from "src/404/ErrorPage";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import useScreenSize from "src/shared/hooks/useIsMobile";
import Grid from '@mui/material/Unstable_Grid2';
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import { startCase, keys, cloneDeep } from 'lodash';
import { FavoriteToSave } from "src/shared/models/starwars.model";
import DateToNow from "src/shared/components/date/DateToNow";
import toast from 'react-hot-toast';


export default function Favorites() {

  const { favoriteId } = useParams(); 
  const { data, isLoading, isFetching, error, refetch, isError, fulfilledTimeStamp, startedTimeStamp } = useFetchFavoriteQuery(favoriteId ?? skipToken);
  const [updateFavorite, result] = useUpdateFavoriteMutation();
  const { isMobile } = useScreenSize();

  const onRefreshHandler = () => {
    const refresh$ = refetch();
    toast.promise(refresh$, {
      loading: 'Refreshing...',
      success: 'Successfully refreshed!',
      error: 'Error refreshing favorites'
    });
  };

  const onEditHandler = () => {
    const toUpdate = cloneDeep(data);
    if (toUpdate) {
      toUpdate.isCurrentFavorite = !toUpdate.isCurrentFavorite;
      toUpdate.lastUpdated = new Date().getTime();
      updateFavorite(toUpdate);
    }
  };


  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ 'Favorite' } />
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
        <Grid container xs={ 12 } flexDirection={ { xs: 'row', sm: 'row' } } justifyContent="space-between" alignItems="center">
          <Grid xs={ 10 } sm={ 4 }>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Button startIcon={ <RefreshIcon /> } variant="text" onClick={ onRefreshHandler }>Refresh</Button>
              <Divider orientation="vertical" variant="middle" flexItem sx={ {mr: 1, ml: 1} } />
              <Button startIcon={ <EditIcon /> } variant="text" onClick={ onEditHandler }>Edit</Button>
            </Stack>
          </Grid>
          <Grid xs={ 2 } sm={ 8 }>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              { isFetching && <ProgressCircle size={ 20 } /> }
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>

      <Box mt={ 2 } m={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'med' }>
          <Grid xs={ 12 } sx={ {border: '1px solid #ddd', borderRadius: '10px', p: 2} }>
            <Stack direction={ isMobile ? "column" : "row" } justifyContent="start" alignItems="center">
              <Typography variant='h4' sx={ {fontWeight: 500} } mr={ 2 }>
                Ep. { data.episodeId }
              </Typography>
              <Typography variant='body1'>
                Last updated: <DateToNow dateInMilli={ data.lastUpdated } /> ago
              </Typography>
            </Stack>
            <Divider sx={ {my: 2} } />
            <Stack direction="column" >
              {
                keys(data).map((res: string) => {
                  return (
                    <Box key={ res } mb={ 1 }>
                      <Stack direction={ isMobile ? "column" : "row" } justifyContent="start" 
                        alignItems={ isMobile ? "start" : "center" }>
                        <Typography variant='h6' fontWeight={ 300 }>
                          { startCase(res) }
                        </Typography>
                        {!isMobile && <Typography mr={ 1.5 }>:</Typography>}
                        <Typography variant='h5'>
                          { `${data[res as keyof FavoriteToSave]}` }
                        </Typography>
                      </Stack>
                    </Box>
                  );
                })
              }
            </Stack>
          </Grid>
        </LayoutWithGutter>
      </Box>

    </Stack>
  );
};