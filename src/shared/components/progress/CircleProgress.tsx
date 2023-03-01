import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export default function ProgressCircle({ size=40, color='grey.500', styleProps }: {size?: number, color?: string, styleProps?: SxProps<Theme>}) {
  return (
    <Stack sx={ { color: color, ...styleProps } } spacing={ 1 } direction="row">
      <CircularProgress color="inherit" size={ size } />
    </Stack>
  );
}