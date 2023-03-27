import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode, useEffect, useState } from 'react';

export interface LayoutGutterProps {
  children: ReactNode;
  size?: "full" | "med" | "skinny"
}

function LayoutWithGutter({ size = "med", children }: LayoutGutterProps) {

  const [sizes, setSizes] = useState({ width: 7, offset: 2.5 });

  useEffect(() => {
    switch (size) {
      case "full": {
        setSizes({width: 12, offset: 0});
        break;
      }
      case "med": {
        setSizes({width: 7, offset: 2.5});
        break;
      }
      case "skinny": {
        setSizes({width: 4, offset: 4});
        break;
      }
    }
  }, [size]);

  return (
    <Grid container spacing={ 0 } xs={ 12 } xsOffset={ 0 } sm={ sizes.width } smOffset={ sizes.offset }>
      { children }
    </Grid>
  );
}

export default LayoutWithGutter;