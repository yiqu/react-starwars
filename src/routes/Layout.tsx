import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet } from 'react-router-dom';
import falconLogo from '../static/img/mfalcon.png';
import { Drawer, DrawerHeader } from './Layouts/layout-components';
import LeftNav from 'src/left-nav/LeftNav';
import TopNav from 'src/top-nav/TopNav';


const Layout = () => {
  
  const leftNavTitle = 'SWDB';

  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (openState: boolean) => {
    setOpen(openState);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={ { display: 'flex' } }>
      <CssBaseline />
      
      <TopNav open={ open } onNavOpen={ handleDrawerOpen } />

      <Drawer variant="permanent" open={ open }>
        <DrawerHeader >
          <Typography component='div' sx={ {display: 'flex', flexDirection:"row", alignItems:"center"} }>
            <Typography component="img" src={ falconLogo } sx={ {height: '2rem', mr: '10px'} } alt="logo"></Typography>
            <Typography variant='h6'>{ leftNavTitle }</Typography>
            
          </Typography>
          <IconButton onClick={ handleDrawerClose }>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        
        <LeftNav open={ open } ></LeftNav>

      </Drawer>

      <Box component="main" sx={ { flexGrow: 1, p: 0 } }>
        <DrawerHeader />
        <Outlet />
      </Box>
      
    </Box>
  );
};

export default Layout;