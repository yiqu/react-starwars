import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { times } from 'lodash';
import Grid from '@mui/system/Unstable_Grid';

const LoadingSkeleton = ({ count }: { count: number }) => {

  return (
    <Grid direction="column" padding={ 2 } xs={ 12 }>

      <Grid xs={ 12 } md={ 6 }>
        <Skeleton variant='text' sx={ {fontSize: '2rem'} }></Skeleton>
      </Grid>

      <Grid container spacing={ 2 }>
        {
          times(count, (index) => {
            return (
              <Grid key={ index } xs={ 12 } sm={ 12 } md >
                <Stack direction="row" sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'} }>
                  <Skeleton variant='text' sx={ { fontSize: '2rem', width: '10rem'} } />
                  <Skeleton variant='circular' width={ 40 } height={ 40 } />
                </Stack>

                <Skeleton variant='rectangular' height="30rem" />
              </Grid>
            );
          })
        }
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;