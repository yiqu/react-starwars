/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { createSearchParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import { Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import TableChartIcon from '@mui/icons-material/TableChart';
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import ViewModuleIcon from '@mui/icons-material/ViewModule';


const Core = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);

  const filmPageDisplayToggleHandler = () => {
    const nextDisplayMode = {
      moviePageDisplayMode: getNextDisplayState(filmPageDisplayMode)
    };
    setSearchParams(nextDisplayMode);
  };

  useEffect(() => {
    let currentMode = DataBlockDisplayMode.CARD;
    if (currentDisplayModeUrl) {
      currentMode = currentDisplayModeUrl === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.CARD : DataBlockDisplayMode.TABLE;
    }
    setFilmPageDisplayMode(currentMode);
  }, [currentDisplayModeUrl]);



  return (
    <React.Fragment>
      <Grid container>

        <Grid xs={ 12 }>
          <AppBar position="sticky" elevation={ 0 }>
            <Toolbar variant="dense" sx={ {bgcolor: '#fff', color: '#000'} }>
              <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography component="div" sx={ {display: 'flex'} }>
                  <Button color="inherit" variant="text">
                    <RefreshIcon sx={ {mr: '10px'} } />
                    Refresh
                  </Button>
                </Typography>
                <Typography component="div" sx={ {display: 'flex'} }>
                  <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
                    <IconButton onClick={ filmPageDisplayToggleHandler }>
                      {
                        filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />)
                      }
                    </IconButton>
                  </Tooltip>
                </Typography>
              </Stack>
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

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};