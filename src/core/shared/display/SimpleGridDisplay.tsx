import { FC, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { StarwarsContent } from "src/shared/models/starwars.model";
import { filter, interval, take, tap } from "rxjs";
import { flexCenter } from "src/shared/utils/css.utils";

export interface SimpleGridDisplayProps {
  data: StarwarsContent[];
  itemUrlPath: string;
  gridStyles?: any;
}

const SimpleGridDisplay: FC<SimpleGridDisplayProps> = ({data, itemUrlPath, gridStyles}: SimpleGridDisplayProps) => {

  

  return (
    <Grid container >
      {
        data.map((display: StarwarsContent) => {
          return (
            <Grid xs={ 12 } sm={ 4 } md={ 3 } lg={ 2 } key={ display.uid } sx={ { border: '1px solid #ccc', p: 2, m: 2, borderRadius: '10px'} }>
              <Link to={ `/${itemUrlPath}/${display.uid}` }>
                <DisplayName name={ display.name }  />
              </Link>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default SimpleGridDisplay;

function DisplayName({ name }: {name: string}) {

  const [className, setClassName] = useState<string>('');
  const [ animating, setAnimating] = useState<boolean>(false);

  const onMouseOverHandler = () => {
    
    if (!animating) {
      setAnimating(true);
      setClassName("animate__animated animate__headShake");
      interval(1000).pipe(
        take(2)
      ).subscribe({
        complete: () => {
          setClassName("");
          setAnimating(false);
        }
      });
    }
  };

  return (
    <Typography onMouseOver={ onMouseOverHandler } className={ className } variant="h6" sx={ {
      fontWeight:'500', ...flexCenter} }>
      { name } 
    </Typography>
  );
}