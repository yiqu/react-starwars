import * as React from 'react';
import { useContext, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import { Drawer, DrawerHeader } from './Layouts/layout-components';
import LeftNav from 'src/left-nav/LeftNav';
import TopNav from 'src/top-nav/TopNav';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeftNavHeader from 'src/left-nav/LeftNavHeader';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { getMyTheme } from 'src/theme/AppTheme';
import ThemeContext from 'src/theme/ThemeContext';
import Grid from '@mui/material/Unstable_Grid2';
import { GREY } from 'src/theme/palette';
import { useAppDispatch } from 'src/store/appHook';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';


const Layout = () => {
  
  const currentTheme = useTheme();
  const themeContext = useContext(ThemeContext);
  const [open, setOpen] = React.useState(true);
  const isMobileScreenSize = useMediaQuery(currentTheme.breakpoints.down('sm'));
  const theme: Theme = useMemo(() => {
    return createTheme(getMyTheme(themeContext.currentTheme));
  }, [themeContext.currentTheme]);

  const handleDrawerOpen = (openState: boolean) => {
    setOpen(openState);
  };

  const handleDrawerClose = (openState: boolean) => {
    setOpen(openState);
  };

  useEffect(() => {
    if (isMobileScreenSize) {
      setOpen(false);
    }
  }, [isMobileScreenSize]);


  return (
    <ThemeProvider theme={ theme }>
      <Box sx={ { display: 'flex', height: '100%' } }>
        <CssBaseline />
      
        <TopNav open={ open } onNavOpen={ handleDrawerOpen } />

        <Drawer variant="permanent" open={ open }>

          <LeftNavHeader closeDrawerHandler={ handleDrawerClose } />

          <Divider />
        
          <LeftNav open={ open } />

        </Drawer>

        <Box component="main" sx={ { flexGrow: 1, bgcolor:(theme) => theme.palette.mode === 'light' ? GREY[100] : null } }>
          <DrawerHeader />
          <Grid container sx={ {bgcolor:(theme) => theme.palette.mode === 'light' ? GREY[100] : null } } pb={ 5 }>

            <Outlet />

          </Grid>
        </Box>
        <Toaster
          position="top-center"
          containerClassName="swdb-toast-container"
          containerStyle={ {} }
          toastOptions={ {
            className: 'swdb-toast',
            duration: 5000,
            success: {
              duration: 8000,
            },
            error: {
              duration: 10000
            }
          } }
        />
        <Tooltip id="tooltip" place="bottom" />
      </Box>
    </ThemeProvider>
    
  );
};

export default Layout;