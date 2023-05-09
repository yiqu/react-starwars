import { FavoriteToSave } from "src/shared/models/starwars.model";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, CircularProgress, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import { useFetchFavoritesQuery } from "src/core/store/favorites/favorites.api";
import LoadingLogo from "src/shared/loading/full-logo/LoadingLogo";
import ErrorPage from "src/404/ErrorPage";
import AppToolbar from "src/shared/components/toolbar/Toolbar";
import DateDisplay2 from "src/shared/components/date/DateDisplay2";
import DurationDisplay from "src/shared/components/date/DurationDisplay";
import { Delete, DeleteOutline, FavoriteOutlined, RefreshOutlined } from "@mui/icons-material";
import useScreenSize from "src/shared/hooks/useIsMobile";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import FolderIcon from '@mui/icons-material/Folder';
import DateToNow from "src/shared/components/date/DateToNow";

export default function FavoritesAll() {

  const favorites: FavoriteToSave[] = useAppSelector(fromFavSelectors.selectFilteredFavorites);
  const isFirstTimeLoading: boolean | undefined = useAppSelector(fromFavSelectors.selectIsFirstTimeLoading);
  const { isMobile } = useScreenSize();
  
  const { data, onlyFavorites, isLoading, isFetching, isError, error, fulfilledTimeStamp, startedTimeStamp } = useFetchFavoritesQuery(undefined, {
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


  if (isLoading) return (
    <Stack direction="column" width="100%" justifyContent="center" alignItems="center" height="100vh">
      <LoadingLogo message={ 'Favorites' } />
    </Stack>
  );

  if (isError) {
    return <ErrorPage reason={ (error as any).status } debug={ (error as any).error } />;
  }

  if (!onlyFavorites) {
    return <></>;
  }

  const handleRefreshFavorites = () => {
    
  };


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
            <Stack direction="row" justifyContent="end" alignItems="center" width="100%" spacing={ 2 } data-tooltip-id="fetch-information">
              { isFetching && <CircularProgress size={ 20 } /> }
              { !isFetching && <Typography fontSize={ 11 } component="div">
                Last fetched <DateDisplay2 dateInMilli={ fulfilledTimeStamp ?? 0 } />, took: <DurationDisplay durationInMilli={ fetchTimeDuration } />
              </Typography> }
              <Button variant="outlined" startIcon={ <RefreshOutlined /> } onClick={ handleRefreshFavorites }>
                Refresh Favorites
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </AppToolbar>
      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'skinny' }>
          <List dense={ false } sx={ {width: '100%'} }>
            { onlyFavorites.map((fav) => {
              return (
                <ListItem key={ fav.fireId } secondaryAction={
                  <Tooltip title="Remove from favorites">
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </Tooltip>
                }>
                  <ListItemAvatar sx={ {mr: 2} }>
                    <Avatar src={ `${process.env.PUBLIC_URL}/assets/poster-img/${fav.episodeId}.png` }
                      sx={ { width: 80, height: 80 } }>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={ `Ep. ${fav.episodeId}` }
                    secondary={ <>Favorited: <DateToNow dateInMilli={ fav.lastUpdated } /> ago </> }
                  />
                </ListItem>
              );
            }) }
          </List>
          
        </LayoutWithGutter>
      </Box>
    </Stack>
  );
};