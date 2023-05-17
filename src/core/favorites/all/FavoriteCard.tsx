import { Card, CardContent, Typography, CardActions, Button, IconButton, Stack, Box, CardMedia, Divider, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress } from "@mui/material";
import { FavoriteToSave } from "src/shared/models/starwars.model";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DateToNow from "src/shared/components/date/DateToNow";


export interface FavoriteItemProps {
  isWorking: boolean;
  favorite: FavoriteToSave;
  toggle: (fav: FavoriteToSave) => void;
}

export default function FavoriteItem({ favorite, isWorking, toggle }: FavoriteItemProps) {

  return (
    <ListItem key={ favorite.fireId } secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={ () => toggle(favorite) } data-tooltip-id="tooltip" 
        data-tooltip-content="Toggle favorite" >
        <FavoriteIcon color={ favorite.isCurrentFavorite ? 'error' : 'disabled' } />
      </IconButton>
    }>
      <ListItemAvatar sx={ {mr: 2} }>
        <Avatar src={ `${process.env.PUBLIC_URL}/assets/poster-img/${favorite.episodeId}.png` }
        sx={ { width: 80, height: 80 } }>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={ <Link to={ `./${favorite.fireId}` }>
          <Stack direction="row" justifyContent="start" alignItems="center">
            <Typography variant="h5">
              {`Ep. ${favorite.episodeId}`} { isWorking ? <CircularProgress size={ 12 } color="info" /> : '' }
            </Typography>
          </Stack>
        </Link> }
        secondary={ <Typography variant="body1">Updated: <DateToNow dateInMilli={ favorite.lastUpdated } /> ago </Typography> }
      />
    </ListItem>
  );
};
