/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useContext } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '../routes/Layouts/layout-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "src/shared/utils/text-transform";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@mui/material/styles";
import { PaletteMode, Stack, Tooltip } from "@mui/material";
import ThemeContext from "src/theme/ThemeContext";
import { useLocalStorage } from 'react-use';
import { LS_APP_THEME, TransformPageTitle } from "src/shared/utils/constants";
import { startCase } from 'lodash';

export interface TopNavProps {
  open: boolean;
  onNavOpen: (openState: boolean) => void;
}

export default function TopNav({ open, onNavOpen }: TopNavProps) {

  const location = useLocation();
  const [title, setTitle] = useState<string>();
  const [titleUrlPath, setTitleUrlPath] = useState<string>('');
  const themeContext = useContext(ThemeContext);
  const [currentTheme, setLocalStorageTheme, remove] = useLocalStorage<PaletteMode>(LS_APP_THEME, 'light');
  
  useEffect(() => {
    const urlArray: string[] = location.pathname.split("/");
    let pathTitle: string = urlArray[1];
    setTitleUrlPath(pathTitle);
    if (pathTitle === 'core') {
      pathTitle = urlArray[2];
      setTitleUrlPath(`core/${pathTitle}`);
    }
    setTitle(pathTitle);
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    onNavOpen(true);
  };
  const toggleThemeHandler = () => {
    const themeToSet = themeContext.currentTheme==='light' ? 'dark' : 'light';
    themeContext.setTheme(themeToSet);
    setLocalStorageTheme(themeToSet);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" open={ open } elevation={ 1 }>
        <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" justifyContent="start" alignItems="center">
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
              <Link to={ `/${titleUrlPath}` }>
                <Typography variant="h5" noWrap sx={ {fontWeight: 400, fontFamily:'Poppins', color: "#fff"} }>
                  { startCase(TransformPageTitle[title+'']) }
                </Typography>
              </Link>
            </Stack>

            <Tooltip title={ `Turn ${themeContext.currentTheme==='light'?'off':'on'} the lights` }>
              <IconButton sx={ { ml: 1 } } color="inherit" onClick={ toggleThemeHandler }>
                { themeContext.currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
              </IconButton>
            </Tooltip>

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
