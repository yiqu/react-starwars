/* eslint-disable @typescript-eslint/no-unused-vars */
import { FCC } from "src/shared/models/fc-children.model";
import { StarwarsFilmCardProps } from "src/shared/models/starwars.model";
import Grid from "@mui/system/Unstable_Grid";
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
import { Stack } from "@mui/material";


const MovieCard: FCC<StarwarsFilmCardProps> = (props: StarwarsFilmCardProps) => {

  const favoriteHandler = () => {
    props.onFavorite(props.film);
  };

  const { isXl } = useScreenSize();

  return (
    <Card sx={ {border:"2px solid #726f53", height:(isXl ? '100%': '100%'), display:'flex',
      flexDirection:'column', justifyContent:'space-between'} } 
      elevation={ 4 }>
      <div>
        <CardMedia
          component="img"
          alt="poster"
          height="440"
          image={ `${process.env.PUBLIC_URL}/assets/poster-img/${props.film.episode_id}.png` }
          sx={ {backgroundColor: '#000', objectFit: 'contain'} }
        />
        <CardContent>
          <Stack direction={ {lg: 'column', xl: 'row'} } justifyContent={ {xl:'space-between', lg:'flex-start'} }
            marginBottom={ {lg:'10px', xl: '0px'} }>
            <Typography gutterBottom variant="h5" component={ Link } to={ `./${props.uid}` } sx={ {fontFamily:'Poppins',
              fontWeight:'500'} }>
              { props.film.title }
            </Typography>
            <Typography variant="h5" color='text.secondary' sx={ {fontWeight: '300'} }>
              EP { props.film.episode_id }
            </Typography>
          </Stack>
          
          <Typography variant="body2" color="text.secondary">
            Released: { props.film.release_date }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Directed by: { props.film.director }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Produced by: { props.film.producer }
          </Typography>
          <Typography variant="body2" color="text.primary" sx={ {mt:'10px'} }>
            { props.film.opening_crawl }
          </Typography>
        </CardContent>
      </div>
      
      <CardActions sx={ {display: 'flex', justifyContent: 'space-between'} }>
        <div>
          <Button size="small" component={ Link } to={ `./${props.uid}` }>
            Learn More
          </Button>
        </div>
        <div>
          <IconButton aria-label="favorite" onClick={ favoriteHandler } 
            title={ props.favorited?.isCurrentFavorite ? 'Remove from favorites' : 'Add to favorites' }>
            <FavIcon color={ props.favorited?.isCurrentFavorite ? 'error' : 'disabled' } />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default MovieCard;