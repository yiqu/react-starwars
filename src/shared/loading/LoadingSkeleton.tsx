import { Stack, Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export interface LoadingSkeletonProps {
  loading?: boolean;
  children: any;
}

export default function LoadingSkeleton(props: LoadingSkeletonProps) {

  if (props.loading) return (
    <Grid xs={ 12 } sm={ 12 } >
      <Stack direction="row" sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'} }>
        <Skeleton variant='text' sx={ { fontSize: '2rem', width: '10rem'} } />
        <Skeleton variant='circular' width={ 40 } height={ 40 } />
      </Stack>

      <Skeleton variant='rectangular' height="30rem" />
    </Grid>
  );

  return (
    <>
      {props.children}
    </>
  );
}