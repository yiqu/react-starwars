/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '../routes/Layouts/layout-components';
import MenuIcon from '@mui/icons-material/Menu';
import { TopNavProps } from "src/shared/models/nav-item.model";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import RefreshIcon from '@mui/icons-material/Refresh';

const TopNav: FC<TopNavProps> = (props) => {

  const location = useLocation();

  const [title, setTitle] = useState<string>();

  useEffect(() => {
    const urlArray: string[] = location.pathname.split("/");
    const pathTitle: string = urlArray[1];
    setTitle(pathTitle);
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    props.onNavOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" open={ props.open } elevation={ 1 }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={ handleDrawerOpen }
            edge="start"
            sx={ {
              marginRight: 5,
              ...(props.open && { display: 'none' }),
            } }
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={ {fontWeight: 400} }>
            { title }
          </Typography>
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

export default TopNav;