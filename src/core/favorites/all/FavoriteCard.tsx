import { Card, CardContent, Typography, CardActions, Button, IconButton, Stack, Box, CardMedia, Divider } from "@mui/material";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DateDisplay from "src/shared/components/date/DateDisplay";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { toggleFavoriteExhaustThunk, toggleFavoriteThunk } from "src/core/store/favorites/favorites.thunks";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import urlcat from "urlcat";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import ConfirmDialog from "src/shared/components/dialog/ConfirmDialog";
import { useState } from "react";

export interface FavoriteCardProps {
  fav: FavoriteToSave;
}

export default function FavoriteCard({ fav }: FavoriteCardProps) {
  const userId = 'yqu';
  const dispatch = useAppDispatch();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  
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

  const openUnfavoriteConfirm = () => {
    setOpenConfirm(true);
  };

  const onConfirmHandler = (choice: boolean) => {
    setOpenConfirm(false);
    if (choice) {
      unfavoriteHandler();
    }
  };

  return (
    <>
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
            onClick={ openUnfavoriteConfirm } 
            title={ fav.isCurrentFavorite ? 'Unfavorite this film' : '' }
            disabled={ fav.apiWorking }
            fullWidth
            color="error"
          >
            Remove
          </Button>
        </CardActions>
      </Card>

      <ConfirmDialog handleClose={ onConfirmHandler } open={ openConfirm } message={ `Are you sure you want to remove EP ${fav.episodeId} from favorites?` } />
    </>
    
  );
};
