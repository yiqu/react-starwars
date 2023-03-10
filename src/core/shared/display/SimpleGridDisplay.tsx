import { FC, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { Box, Divider, Stack, Typography } from "@mui/material";
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
            <Grid key={ display.uid } xs={ 12 } sm={ display.url ? 6 : 12 } md={ display.url ? (gutterSize === "med" ? 3 : 2): 12 }  
              sx={ display.url ? { border: '1px solid #ddd', m: 2, borderRadius: '10px'} : {m: 2} } >
              {
                display.url ? (
                  <Link to={ `/${itemUrlPath}/${display.uid}` }>
                    <DisplayName name={ display.name } id={ display.uid } />
                  </Link>
                
                ) : (
                  <Stack direction="row" sx={ {...flexCenter} } spacing={ 2 }>
                    <Typography variant="h5" color="#000" fontFamily={ 'Poppins' }>
                      {display.uid}
                    </Typography>
                    <Divider sx={ {width: "calc(100% - 2rem)"} } />
                  </Stack>
                )
              }
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
    <Stack direction="row" sx={ {fontWeight:'500', p: 1, ...flexCenter} } spacing={ 1 } title={ `#${id}` }>
      <Typography onMouseOver={ onMouseOverHandler } className={ className } variant="h6">
        { name } 
      </Typography>
    </Stack>
    
  );
}