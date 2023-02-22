import { Card, CardContent, Typography, CardActions, Button, IconButton, Stack, Box, CardMedia, Divider } from "@mui/material";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import FavIcon from '@mui/icons-material/Favorite';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DateDisplay from "src/shared/components/date/DateDisplay";
import useScreenSize from "src/shared/hooks/useIsMobile";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { fetchFavoritesSwitchThunk, toggleFavoriteExhaustThunk, toggleFavoriteThunk } from "src/core/store/favorites/favorites.thunks";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import urlcat from "urlcat";
import * as fromFavSelectors from '../../store/favorites/favorites.selectors';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom";

export interface FavoriteCardProps {
  fav: FavoriteToSave;
}

export default function FavoriteCard({ fav }: FavoriteCardProps) {
  const userId = 'yqu';
  const { isMobile } = useScreenSize();
  const dispatch = useAppDispatch();
  
  const unfavoriteHandler = () => {
    if (fav.isCurrentFavorite) {
      const favorite: FavoriteToSave = {
        ...fav
      };
      const restUrl: string = urlcat(
        BASE_FIREBASE_URL, 
        `swdb/:user/favorites/${fav.fireId}.json`, 
        { user: userId }
      );
      const promise = dispatch(toggleFavoriteThunk({
        fav: favorite,
        favStatus: false,
        url: restUrl
      }));
      promise.unwrap().then((res) => {
      });
    }
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={ 2 }>
          <Box>
            <CardMedia
              component="img"
              alt="poster"
              height="100"
              image={ `${process.env.PUBLIC_URL}/assets/poster-img/${fav.episodeId}.png` }
              sx={ {backgroundColor: '#000', objectFit: 'contain', borderRadius: '20px'} }
            />
          </Box>
          <Stack direction="column" spacing={ 0.3 }>
            <Typography variant="h5" sx={ {fontWeight: '500', fontFamily:'Poppins'} } component={ Link } to={ `/movies/${fav.filmId}` }>
              EP { fav.episodeId }
            </Typography>
            <Box color="text.secondary">
              <Stack direction="row" spacing={ 0.3 }>
                <Box>Favorited</Box>
                <DateDisplay date={ fav.lastUpdated } fromNow />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="text" startIcon={ (fav.apiWorking) ? <HourglassBottomIcon /> : <ClearIcon /> } 
          onClick={ unfavoriteHandler } 
          title={ fav.isCurrentFavorite ? 'Unfavorite this film' : '' }
          disabled={ fav.apiWorking }
          fullWidth
          color="error"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
