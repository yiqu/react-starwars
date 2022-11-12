/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useState } from "react";
import useFetchMovies from "src/core/hooks/useFetchMovies";

const Movies = () => {

  const [time, setTime] = useState(0);

  const {data, error, loading, mutate} = useFetchMovies({url: 'films', params: {fetchTime: time}});

  const refresh = () => {
    setTime(new Date().getTime());
  };

  return (
    <Grid container>
      All Movies
      <Button onClick={ refresh }>Refresh</Button>
    </Grid>
  );
};

export default Movies;