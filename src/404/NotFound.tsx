import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { flexCenter } from "src/shared/utils/css.utils";
import logo from 'src/static/img/death-star.png';


export default function NotFound404Page() {

  return (
    <Grid container sx={ {height: '100vh'} }>
      <Grid xs={ 6 } xsOffset={ 3 } sx={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} } >
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h2" sx={ {mb: 5} }>
            404
          </Typography>
          <Typography variant="h5" textAlign="center">
            This is not the page you are looking for.
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={ 6 } xsOffset={ 3 } sx={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
        <Stack direction="row" sx={ {...flexCenter} }>
          <img src={ logo } alt="logo" style={ {height: "8rem"} }></img>
        </Stack>
      </Grid>
      <Grid xs={ 6 } xsOffset={ 3 } sx={ {display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
        <Stack direction="row" sx={ {...flexCenter} }>
          <Link to={ "/" }>Go back home</Link>
        </Stack>
      </Grid>
    </Grid>
  );
};