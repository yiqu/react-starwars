import React from "react";
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

const Core = () => {

  return (
    <React.Fragment>
      <Grid container>

        <Grid xs={ 12 }>
          <AppBar position="sticky" elevation={ 0 }>
            <Toolbar variant="dense" sx={ {bgcolor: '#fff', color: '#000'} }>
              <Button color="inherit" variant="text">
                Refresh
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>

        <Divider sx={ {width: '100%'} } />

        <Outlet />

      </Grid>
      
    </React.Fragment>
  );
};

export default Core;