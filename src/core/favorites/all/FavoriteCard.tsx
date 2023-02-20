import { Card, CardContent, Typography, CardActions, Button, IconButton, Stack, Box } from "@mui/material";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import FavIcon from '@mui/icons-material/Favorite';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DateDisplay from "src/shared/components/date/DateDisplay";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { fetchFavoritesSwitchThunk, toggleFavoriteExhaustThunk } from "src/core/store/favorites/favorites.thunks";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import urlcat from "urlcat";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';


export interface FavoriteCardProps {
  fav: FavoriteToSave;
}

export default function FavoriteCard({ fav }: FavoriteCardProps) {
  const userId = 'yqu';
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  //TODO: make loading to be individual , not all loading
  const isUnfavLoading = useAppSelector(fromFavSelectors.selectIsLoading);
  
  const unfavoriteHandler = () => {
    if (fav.isCurrentFavorite) {
      const favorite: FavoriteToSave = {
        ...fav,
        lastUpdated: new Date().getTime(),
        isCurrentFavorite: false,
      };
      const restUrl: string = urlcat(
        BASE_FIREBASE_URL, 
        `swdb/:user/favorites/${fav.fireId}.json`, 
        { user: userId }
      );
      const promise = dispatch(toggleFavoriteExhaustThunk({
        fav: favorite,
        url: restUrl
      }));
      promise.then((_) => {
        dispatch(fetchFavoritesSwitchThunk({user: 'yqu'}));
      });
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={ {fontWeight: '300'} }>
          EP { fav.episodeId }
        </Typography>
        <Box color="text.secondary">
          <Stack direction={ isMobile ? 'column' : 'row' }>
            <Box marginRight="5px">
              Last updated: <DateDisplay date={ fav.lastUpdated } fromNow />
            </Box>
            <Box>
              (<DateDisplay date={ fav.lastUpdated } fromNow={ false } format={ 'MM/DD/YY hh:mm A' } />)
            </Box>
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton 
          onClick={ unfavoriteHandler } 
          title={ fav.isCurrentFavorite ? 'Unfavorite this film' : '' }
          disabled={ isUnfavLoading } >
          { (isUnfavLoading) ? <HourglassBottomIcon /> : <FavIcon color={ fav.isCurrentFavorite ? 'error' : 'disabled' } />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
