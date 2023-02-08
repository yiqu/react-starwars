/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import FavIcon from '@mui/icons-material/Favorite';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { Box, Stack } from "@mui/material";
import { getFilmFavoriteToggleTooltip } from "src/core/utils/films.utils";
import DateDisplay from "src/shared/components/date/DateDisplay";
import { StarwarsFilm, FavoriteToSave } from "src/shared/models/starwars.model";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { axiosPost, axiosPut } from 'src/shared/rest/axios';
import urlcat from "urlcat";
import { AxiosResponse } from "axios";

export interface StarwarsFilmCardProps {
  film: StarwarsFilm;
  uid: string;
  userId: string;
  allFavoritesLoading?: boolean;
  reloadMovies: () => void
}

export default function MovieCard({ film, uid, userId, allFavoritesLoading, reloadMovies }: StarwarsFilmCardProps) {

  const [saveFavLoading, setSaveFavLoading] = useState<boolean>(false);

  const favoriteToggleHandler = () => {
    const { url: filmUrl } = film;
    const filmId = (filmUrl.split("/"))[filmUrl.split("/").length - 1];
    const restUrl: string = urlcat(
      BASE_FIREBASE_URL, 
      `swdb/:user/favorites${film.favorite?.fireId ? ('/'+film.favorite?.fireId) :''}.json`, 
      { user: userId }
    );

    const favorite: FavoriteToSave = {
      filmUrl,
      filmId,
      lastUpdated: new Date().getTime(),
      episodeId: film.episode_id,
      isCurrentFavorite: true,
    };

    setSaveFavLoading(true);
    if (film.favorite) {
      favorite.isCurrentFavorite = !film.favorite.isCurrentFavorite;
      favorite.fireId = film.favorite.fireId;
      axiosPut<AxiosResponse>({ 
        url: restUrl, 
        body: favorite, 
        onSuccess: (res) => {
          reloadMovies();
        },
        onFailure: (err) => {
        },
        onFinally: () => {
          setSaveFavLoading(false);
        }
      });
    } else {
      axiosPost<AxiosResponse>({ 
        url: restUrl, 
        body: favorite, 
        onSuccess: (res) => {
          reloadMovies();
        },
        onFailure: (err) => {
        },
        onFinally: () => {
          setSaveFavLoading(false);
        }
      });
    }
  };

  return (
    <Card sx={ {display:'flex',
      flexDirection:'column', 
      justifyContent:'space-between'} } 
      elevation={ 2 }
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
          <IconButton 
            aria-label="favorite" 
            onClick={ favoriteToggleHandler } 
            title={ getFilmFavoriteToggleTooltip(film.favorite) }
            disabled={ !!(saveFavLoading || allFavoritesLoading) } >
            { (saveFavLoading || allFavoritesLoading) ? <HourglassBottomIcon /> : <FavIcon color={ film.favorite?.isCurrentFavorite ? 'error' : 'disabled' } />}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};