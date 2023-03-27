import { ReactNode, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { StarwarsContent } from "src/shared/models/starwars.model";
import { interval, take } from "rxjs";
import { ellipsis, flexCenter } from "src/shared/utils/css.utils";
import LayoutWithGutter from "src/shared/components/layouts/LayoutWithGutter";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { range } from 'lodash';
import { PAGE_LIMIT_30 } from "src/shared/utils/constants";

export interface SimpleGridDisplayProps {
  data: StarwarsContent[];
  itemUrlPath: string;
  gutterSize?: "full" | "med" | "skinny";
  totalPages?: number;
  page?: number;
  totalRecords?: number;
  onPaged?: (event: React.ChangeEvent<unknown>, page: number) => void;
  isFetching?: boolean;
  children?: ReactNode;
}

function SimpleGridDisplay({ data, itemUrlPath, gutterSize="med", totalPages=0, page=0, totalRecords=0, isFetching, onPaged }: SimpleGridDisplayProps) {

  const pageSelectionHandler = (e: SelectChangeEvent) => {
    onPaged && onPaged(null as any, +e.target.value);
  };

  return (
    <LayoutWithGutter size={ gutterSize }>
      { (totalPages > 0) && <Grid xs={ 12 } mb={ 2 } id="top-pagination">
        <Stack direction="row" sx={ {justifyContent:"space-between", alignItems:"center"} } width="100%">
          <Box sx={ { minWidth: 120 } }>
            <FormControl fullWidth size="small" variant="standard">
              <InputLabel id="page-selection">Page</InputLabel>
              <Select
                labelId="page-selection"
                id="demo-simple-select"
                value={ `${page}` }
                label="Age"
                onChange={ pageSelectionHandler }>
                {
                  range(1, totalPages+1, 1).map((num) => {
                    return <MenuItem value={ num } key={ num }>{num}</MenuItem>;
                  })
                }
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography color="text.secondary" sx={ {lineHeight: 1} }> 
              {((page-1) * PAGE_LIMIT_30)+1} - {(page===totalPages) ? totalRecords : page*PAGE_LIMIT_30} of { totalRecords } 
            </Typography>
          </Box>
          
        </Stack>
      </Grid> }
      {
        data.map((display: StarwarsContent) => {
          return (
            <Grid key={ display.uid } xs={ 12 } sm={ 6 } md={ 4 } xl={ 2.4 }>
              {
                <Box sx={ {p: 1} }>
                  <Link to={ `/${itemUrlPath}/${display.uid}` }>
                    <DisplayName name={ display.name } id={ display.uid } />
                  </Link>
                </Box>
              }
            </Grid>
          );
        })
      }

      {
        (onPaged && (totalPages > 0)) && (
          <Grid xs={ 12 } mt={ 2 }>
            <Stack direction="row" sx={ {...flexCenter} } width="100%">
              <Pagination count={ totalPages } shape="rounded" page={ page } showFirstButton showLastButton 
                onChange={ onPaged } disabled={ isFetching } />
            </Stack>
          </Grid>
        )
      }
      
    </LayoutWithGutter>
  );
};

export default SimpleGridDisplay;

export function DisplayName({ name, id }: {name: string; id: string}) {

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
    <Stack direction="row" sx={ {fontWeight:'500', p: 1, ...flexCenter, border: '1px solid #ddd', borderRadius: '10px',} } title={ `#${id} ${name}` }
      className={ className } >
      <Typography variant="h6" sx={ {...ellipsis} }>
        { name } 
      </Typography>
    </Stack>
  );
}