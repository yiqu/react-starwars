import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { flexCenter } from '../../utils/css.utils';
export interface LoadingSkeletonProps {
  count?: number;
  sxProps?: any;
}

export default function LoadingBarSkeleton({ count = 1, sxProps = {} }: LoadingSkeletonProps) {

  return (
    <>
      {
        Array.from(Array(count).keys()).map((res) => {
          return (
            <Grid xs={ 12 } key={ res } sx={ {...sxProps, ...flexCenter} }>
              <Skeleton variant='text' width="100%" />
            </Grid>
          );
        })
      }
    </>
  );
}