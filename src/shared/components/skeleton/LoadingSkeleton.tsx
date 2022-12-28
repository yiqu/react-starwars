import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { times } from 'lodash';
import Grid from '@mui/system/Unstable_Grid';

const LoadingSkeleton = ({ count }: { count: number }) => {

  return (
    <Grid container spacing={ 2 } direction="column" padding={ 2 } xs={ 12 }>

      <Grid xs={ 12 } sm={ 6 } md={ 3 }>
        <Skeleton variant='text' sx={ {fontSize: '2rem'} }></Skeleton>
      </Grid>

      <Grid container direction="row" wrap="wrap">
        {
          times(count, (index) => {
            return (
              <Grid key={ index } xs={ 12 } sm={ 4 } lg={ 3 }>
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