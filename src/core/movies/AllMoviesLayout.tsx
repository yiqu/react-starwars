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
import useScreenSize from "src/shared/hooks/useIsMobile";


const AllMovieLayout = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentDisplayModeUrl = searchParams.get("moviePageDisplayMode");
  const [filmPageDisplayMode, setFilmPageDisplayMode] = useState<string | null>(currentDisplayModeUrl);
  const { isMobile } = useScreenSize();

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
    <Grid container sx={ {bgcolor:(theme) => theme.palette.mode === 'light' ? 'grey.100' : null } }>
      <AppBar position="sticky" elevation={ 0 } sx={ {top: isMobile ? '56px':'64px', borderBottom: '1px solid #ccc'} }>
        <Toolbar 
          variant="dense" 
          sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? '#fff' : null, 
            color: (theme) => theme.palette.mode === 'light' ? '#000' : null, 
          } }>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Button variant="text" startIcon={ <RefreshIcon /> }>
              Refresh
            </Button>
            <Tooltip title={ `Switch to ${getNextDisplayState(filmPageDisplayMode)}` }>
              <IconButton onClick={ filmPageDisplayToggleHandler }>
                { filmPageDisplayMode === DataBlockDisplayMode.CARD ? (<TableChartIcon />) : (<ViewModuleIcon  />) }
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      <Outlet />

    </Grid>
  );
};

export default AllMovieLayout;

const getNextDisplayState = (current: any) => {
  if (!current) {
    return DataBlockDisplayMode.CARD;
  }
  return current === DataBlockDisplayMode.CARD ? DataBlockDisplayMode.TABLE : DataBlockDisplayMode.CARD;
};