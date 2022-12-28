import { AppBar, Toolbar, Stack, Button, Tooltip, IconButton, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { DataBlockDisplayMode } from "src/shared/models/general.model";
import RefreshIcon from '@mui/icons-material/Refresh';
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Grid from '@mui/material/Unstable_Grid2';


const PersonalFilmLayout = () => {

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
                <Stack direction="row">
                  <Button variant="text" startIcon={ <RefreshIcon /> }>
                    Refresh
                  </Button>
                </Stack>
                <Stack direction="row">
                  <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
                    <IconButton onClick={ filmPageDisplayToggleHandler }>
                      {
                        filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />)
                      }
                    </IconButton>
                  </Tooltip>
                </Stack>
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

export default PersonalFilmLayout;

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};