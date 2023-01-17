/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useFetchMovieDetail from "src/core/hooks/useFetchMovieDetail";
import { Routes, Route, useParams, Params } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { HttpResponse2, StarwarFilmDetail } from "src/shared/models/starwars.model";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import { camelToWord, capitalizeFirstLetter } from 'src/shared/utils/text-transform';


const displayKeys = ['release_date', 'director', 'producer'];

const Movie = () => {

  const params: Readonly<Params<string>> = useParams();
  const { data, loading, error } = useFetchMovieDetail<HttpResponse2<StarwarFilmDetail>>({ movieId: `${params.movieId}` });

  if (loading) return (<Grid xs={ 12 } sm={ 8 } smOffset={ 2 }> <LoadingSkeleton count={ 1 } /> </Grid>);

  return (
    <Grid xs={ 12 } container sx={ {my: 2} }>
      
      <Grid xs={ 10 } sm={ 8 } smOffset={ 2 } xsOffset={ 1 }>

        <CardMedia
          component="img"
          alt="poster"
          height="100"
          image={ `${process.env.PUBLIC_URL}/assets/poster-img/${data?.result.properties.episode_id}.png` }
          sx={ {backgroundColor: '#000', objectFit: 'cover', borderRadius: '25px'} } />

        <Typography variant="h6" component={ 'div' } sx={ {display: 'flex', justifyContent: 'center', mt: '2rem'} }>
          <Typography variant="h6" color='text.secondary' sx={ {fontWeight: '300', mr: '10px'} }>
            EP { data?.result.properties.episode_id }
          </Typography>
          { data?.result.properties.title }
        </Typography>
          
        <List dense={ false } sx={ {display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection: 'column'} }>
          { 
              displayKeys.map((objKey) => {
                return (
                  <React.Fragment key={ objKey }>
                    <ListItem >
                      <ListItemText sx={ {display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection: 'column'} }
                        primary={ capitalizeFirstLetter(camelToWord(objKey)) }
                        secondary={  data?.result.properties[objKey as keyof StarwarFilmDetail] }/>
                    </ListItem>
                  </React.Fragment>
                );
              })
            }

        </List>
            
      </Grid>

    </Grid>
  );
};

export default Movie;