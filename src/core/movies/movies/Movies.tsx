/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useState } from "react";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";
import { HttpResponse, StarwarsFilm } from "src/shared/models/starwars.model";
import MovieCard from "./MovieCard";

const Movies = () => {
  const arrOfItems = Array.from(Array(3).keys());

  const {data, error, loading, mutate} = useFetchMovies<HttpResponse<StarwarsFilm>>({url: 'films', params: {fetchTime: 0}});
  
  return (
    <Grid xs={ 12 } container spacing={ 2 } mx={ 2 } my={ 2 }>
      {/* All Movies
      <Button onClick={ refresh }>Refresh</Button> */}
      { error && (<div>Error occured:</div>)}
      { loading ? (<>{ arrOfItems.map((item) => <Grid key={ item } xs={ 4 }> <LoadingSkeleton /> </Grid>) }</>) : 
        (
          data?.results.map((res) => {
            return (
              <Grid key={ res.episode_id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 4 } xl={ 4 }>
                <MovieCard film={ res }></MovieCard>
              </Grid>
            );
          })
        )
      }

    </Grid>
  );
};

export default Movies;