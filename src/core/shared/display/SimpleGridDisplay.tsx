import { FC } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { StarwarsContent } from "src/shared/models/starwars.model";

export interface SimpleGridDisplayProps {
  data: StarwarsContent[];
  itemUrlPath: string;
  gridStyles?: any;
}

const SimpleGridDisplay: FC<SimpleGridDisplayProps> = ({data, itemUrlPath, gridStyles}: SimpleGridDisplayProps) => {

  return (
    <Grid container spacing={ 2 } disableEqualOverflow { ...gridStyles }>
      {
        data.map((display: StarwarsContent) => {
          return (
            <Grid xs={ 12 } sm={ 4 } md={ 3 } lg={ 2 } key={ display.uid }>
              <Link to={ `/${itemUrlPath}/${display.uid}` }>
                <Typography variant="body1">{ display.name } </Typography>
              </Link>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default SimpleGridDisplay;