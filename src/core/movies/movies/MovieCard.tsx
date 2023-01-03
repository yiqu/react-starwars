/* eslint-disable @typescript-eslint/no-unused-vars */
import { FCC } from "src/shared/models/fc-children.model";
import { StarwarsFilmCardProps } from "src/shared/models/starwars.model";
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import useScreenSize from "src/shared/hooks/useIsMobile";
import FavIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { Box, Stack } from "@mui/material";
import { getFilmFavoriteToggleTooltip } from "src/core/utils/films.utils";
import DateDisplay from "src/shared/components/date/DateDisplay";


export default function MovieCard({ film, favorited, onFavoriteToggle, uid }: StarwarsFilmCardProps) {

  const favoriteToggleHandler = () => {
    onFavoriteToggle(film, favorited);
  };

  return (
    <Card sx={ {display:'flex',
      flexDirection:'column', 
      justifyContent:'space-between'} } 
      elevation={ 4 }
    >
      <div>
        <CardMedia
          component="img"
          alt="poster"
          height="440"
          image={ `${process.env.PUBLIC_URL}/assets/poster-img/${film.episode_id}.png` }
          sx={ {backgroundColor: '#000', objectFit: 'contain'} }
        />
        <CardContent>
          <Stack direction={ {lg: 'column', xl: 'row'} } justifyContent={ {xl:'space-between', lg:'flex-start'} }
            marginBottom={ {lg:'10px', xl: '0px'} }>
            <Typography gutterBottom variant="h5" component={ Link } to={ `./${uid}` } sx={ {fontFamily:'Poppins',
              fontWeight:'500'} }>
              { film.title }
            </Typography>
            <Typography variant="h5" color='text.secondary' sx={ {fontWeight: '300'} }>
              EP { film.episode_id }
            </Typography>
          </Stack>
          
          <Stack spacing={ 1 }>
            <Typography variant="body2" color="text.secondary">
              Released: <DateDisplay date={ film.release_date } format="MMM Do YYYY" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Directed by: { film.director }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Produced by: { film.producer }
            </Typography>
            <Typography variant="body2" color="text.primary">
              { film.opening_crawl }
            </Typography>
          </Stack>
          
        </CardContent>
      </div>
      
      <CardActions sx={ {display: 'flex', justifyContent: 'space-between'} }>
        <div>
          <Button size="small" component={ Link } to={ `./${uid}` }>
            See More
          </Button>
        </div>
        <div>
          <IconButton aria-label="favorite" onClick={ favoriteToggleHandler } 
            title={ getFilmFavoriteToggleTooltip(favorited) }>
            <FavIcon color={ film.userFavorited ? 'error' : 'disabled' } />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};