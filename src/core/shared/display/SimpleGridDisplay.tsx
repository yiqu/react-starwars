import { FC, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { StarwarsContent } from "src/shared/models/starwars.model";
import { filter, interval, take, tap } from "rxjs";
import { flexCenter } from "src/shared/utils/css.utils";
import LayoutWithMedGutter from "src/shared/components/layouts/LayoutWithMedGutter";

export interface SimpleGridDisplayProps {
  data: StarwarsContent[];
  itemUrlPath: string;
  gutterSize?: "full" | "med" | "skinny";
}

function SimpleGridDisplay({ data, itemUrlPath, gutterSize="med" }: SimpleGridDisplayProps) {

  return (
    <LayoutWithMedGutter size={ gutterSize }>
      {
        data.map((display: StarwarsContent) => {
          return (
            <Grid xs={ 12 } sm={ 6 } md={ gutterSize === "med" ? 3 : 2 } key={ display.uid } sx={ { border: '1px solid #ccc', p: 2, m: 2, borderRadius: '10px'} }>
              <Link to={ `/${itemUrlPath}/${display.uid}` }>
                <DisplayName name={ display.name } id={ display.uid } />
              </Link>
            </Grid>
          );
        })
      }
    </LayoutWithMedGutter>
  );
};

export default SimpleGridDisplay;

function DisplayName({ name, id }: {name: string; id: string}) {

  const [className, setClassName] = useState<string>('');
  const [ animating, setAnimating] = useState<boolean>(false);

  const onMouseOverHandler = () => {
    
    if (!animating) {
      setAnimating(true);
      setClassName("animate__animated animate__headShake");
      interval(600).pipe(
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
    <Stack direction="row" sx={ {fontWeight:'500', ...flexCenter} } spacing={ 1 }>
      <Typography variant="h6"  sx={ {color: (theme) => theme.palette.mode === 'light' ? '#dcdcdc' : '#2b4052'} }>
        ({ id })
      </Typography>
      <Typography onMouseOver={ onMouseOverHandler } className={ className } variant="h6">
        { name } 
      </Typography>
    </Stack>
    
  );
}