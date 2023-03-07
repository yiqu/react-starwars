import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode, useEffect, useState } from 'react';
import { flexCenter } from 'src/shared/utils/css.utils';

export interface LayoutGutterProps {
  children: ReactNode;
  size?: "full" | "med" | "skinny"
}

function LayoutWithMedGutter({ size = "med", children }: LayoutGutterProps) {

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
    <Grid container xs={ 12 } sm={ sizes.width } smOffset={ sizes.offset } sx={ {...flexCenter} }>
      { children }
    </Grid>
  );
}

export default LayoutWithMedGutter;