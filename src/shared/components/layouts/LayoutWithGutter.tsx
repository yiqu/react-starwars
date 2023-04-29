import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';

export interface LayoutGutterProps {
  children: ReactNode;
  size?: "full" | "med" | "skinny"
}

function LayoutWithGutter({ size = "med", children }: LayoutGutterProps) {

  return (
    // <Grid container spacing={ 0 } xs={ 12 } xsOffset={ 0 } sm={ sizes.width } smOffset={ sizes.offset }>
    //   { children }
    // </Grid>
    <Grid container spacing={ 0 } xs={ 12 } xsOffset={ 0 } 
      sm={ size==='full' ? 12 : (size === 'med' ? 7 : (4)) } 
      smOffset={ size==='full' ? 0 : (size === 'med' ? 2.5 : (4)) }>
      { children }
    </Grid>
  );
}

export default LayoutWithGutter;