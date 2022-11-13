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


const MovieCard: FCC<StarwarsFilmCardProps> = (props: StarwarsFilmCardProps) => {

  const { isXl } = useScreenSize();

  return (
    <Card sx={ {border:"2px solid #726f53", height:(isXl ? '100%': '51rem'), display:'flex',
      flexDirection:'column', justifyContent:'space-between'} } 
      elevation={ 4 }>
      <div>
        <CardMedia
        component="img"
        alt="poster"
        height="440"
        image={ `/poster-img/${props.film.episode_id}.png` }
        sx={ {backgroundColor: '#000', objectFit: 'contain'} }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={ {fontFamily:'Poppins',
            fontWeight:'600', display: 'flex', justifyContent: 'space-between'} }>
            <div>
              { props.film.title }
            </div>
            <Typography variant="h5" color='text.secondary' sx={ {fontWeight: '300'} }>
              EP { props.film.episode_id }
            </Typography>
          </Typography>
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
      
      <CardActions>
        <Button size="small" component={ Link } to={ `./${props.film.episode_id}` }>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;