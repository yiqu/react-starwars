/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useState } from "react";
import useFetchMovies from "src/core/hooks/useFetchMovies";
import { HttpResponse, StarwarsFilm } from "src/shared/models/starwars.model";
import Movie from "./movie/Movie";

const Movies = () => {

  const [time, setTime] = useState(0);

  const {data, error, loading, mutate} = useFetchMovies<HttpResponse<StarwarsFilm>>({url: 'films', params: {fetchTime: time}});
console.log(loading,data);
  const refresh = () => {
    setTime(new Date().getTime());
  };

  return (
    <Grid container>
      {/* All Movies
      <Button onClick={ refresh }>Refresh</Button> */}
      { loading ? (<div>Loading...</div>) : 
        (
          data?.results.map((res) => {
            return (
              <Movie key={ res.episode_id }></Movie>
            );
          })
        )
      
      }

    </Grid>
  );
};

export default Movies;