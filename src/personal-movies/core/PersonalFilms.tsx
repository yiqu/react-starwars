/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import useFetchPersonalFilms from '../hooks/useFetchPersonalFilms';
import LoadingSkeleton from "src/shared/components/skeleton/LoadingSkeleton";

const PersonalFilms = () => {

  const [refetch, triggerRefetch] = useState<number>(0);

  const { personalFilms, personalFilmsLoading, personalFilmsError, personalFilmsValidating } = 
    useFetchPersonalFilms({user: 'yqu', params: {fetchTime: refetch}});

  if (personalFilmsLoading || !personalFilms) return <LoadingSkeleton count={ 3 } />;
  if (personalFilmsError) return <div>Error Page</div>;

  return (
    <>
      <Grid xs={ 12 } sm={ 6 }>
        <div>Filter</div>
      </Grid>
    </>
    

  );
};

export default PersonalFilms;