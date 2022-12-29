import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressCircle({ size=40, color='grey.500' }: {size?: number, color?: string}) {
  return (
    <Stack sx={ { color: color } } spacing={ 1 } direction="row">
      <CircularProgress color="inherit" size={ size } />
    </Stack>
  );
}