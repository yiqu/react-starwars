/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '../routes/Layouts/layout-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "src/shared/utils/text-transform";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";


export interface TopNavProps {
  open: boolean;
  onNavOpen: (openState: boolean) => void;
}

export default function TopNav({open, onNavOpen}: TopNavProps) {

  const location = useLocation();
  const theme = useTheme();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    const urlArray: string[] = location.pathname.split("/");
    const pathTitle: string = urlArray[1];
    setTitle(pathTitle);
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    onNavOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" open={ open } elevation={ 1 }>
        <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={ handleDrawerOpen }
                edge="start"
                sx={ {
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                } }
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={ {fontWeight: 400} }>
                { capitalizeFirstLetter(title) }
              </Typography>
            </Stack>
            <IconButton sx={ { ml: 1 } } color="inherit">
              { theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>
          </Stack>
        </Toolbar>

        {/* Nested Action bar that is sticky under main top nav */}
        {/* <AppBar position="sticky" elevation={ 0 }>
          <Toolbar variant="dense" sx={ {bgcolor: '#fff', color: '#000'} }>
            <Button color="inherit" variant="text">
              <RefreshIcon sx={ {mr: '10px'} } />
              Refresh
            </Button>
          </Toolbar>
        </AppBar> */}
          
      </AppBar>
    </React.Fragment>
  );
};
