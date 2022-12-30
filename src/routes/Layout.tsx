import * as React from 'react';
import { useEffect } from 'react';
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


const Layout = () => {
  
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down('sm'));

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
    <Box sx={ { display: 'flex', height: '100%' } }>
      <CssBaseline />
      
      <TopNav open={ open } onNavOpen={ handleDrawerOpen } />

      <Drawer variant="permanent" open={ open }>

        <LeftNavHeader closeDrawerHandler={ handleDrawerClose } />

        <Divider />
        
        <LeftNav open={ open } ></LeftNav>

      </Drawer>

      <Box component="main" sx={ { flexGrow: 1, bgcolor:(theme) => theme.palette.mode === 'light' ? '#fff' : null } }>
        <DrawerHeader />
        <Outlet />
      </Box>
      
    </Box>
  );
};

export default Layout;