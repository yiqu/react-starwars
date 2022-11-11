import React, { FC } from "react";
import { LeftNavProps, NavigationItem } from "../shared/models/nav-item.model";
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Person4Icon from '@mui/icons-material/Person4';
import InfoIcon from '@mui/icons-material/Info';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {
  NavLink, useLocation 
} from 'react-router-dom';

const leftNavItems = [
  new NavigationItem('Favorites', 'favorites', ['/', 'favorites'], <FavoriteIcon color='warning' />),
  new NavigationItem('All Movies', 'movies', ['/', 'movies'], <MovieIcon color='primary' />),
  new NavigationItem('Characters', 'characters', ['/', 'characters'], <Person4Icon color='primary' />)
];

const secondaryNavItems = [
  new NavigationItem('About', 'about', ['/', 'about'], <InfoIcon color='primary' />),
];

const LeftNav: FC<LeftNavProps> = (props: LeftNavProps) => {

  const location = useLocation();

  return (
    <React.Fragment>
      <List sx={ {p: 0} }>
        {leftNavItems.map((navItem, index) => (
          <ListItem key={ navItem.id } disablePadding sx={ { display: 'block' } }>
            <ListItemButton 
                sx={ {
                  height: 40,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: '22px',
                  py: '5px'
                } }
                component={ NavLink } to={ navItem.url.join("") } selected={ navItem.url.join("") === location.pathname }
              >
              <ListItemIcon
                  sx={ {
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  } }
                >
                { navItem.icon }
              </ListItemIcon>
              <ListItemText primary={ navItem.display } sx={ { opacity: props.open ? 1 : 0 } } />
            </ListItemButton>
          </ListItem>
          ))}
      </List>

      <Divider />
        
      <List sx={ {p: 0} }>
        {secondaryNavItems.map((navItem, index) => (
          <ListItem key={ navItem.id } disablePadding sx={ { display: 'block' } }>
            <ListItemButton
                sx={ {
                  height: 40,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: '22px',
                  py: '5px'
                } }
                component={ NavLink } to={ navItem.url.join("") } selected={ navItem.url.join("") === location.pathname }
              >
              <ListItemIcon
                  sx={ {
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  } }
                >
                {navItem.icon}
              </ListItemIcon>
              <ListItemText primary={ navItem.display } sx={ { opacity: props.open ? 1 : 0 } } />
            </ListItemButton>
          </ListItem>
          ))}
      </List>
    </React.Fragment>
  );
};

export default LeftNav;