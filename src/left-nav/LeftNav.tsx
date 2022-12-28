import React, { FC, useEffect, useState } from "react";
import { LeftNavProps } from "../shared/models/nav-item.model";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { NavLink, useLocation } from 'react-router-dom';
import { getFilledIcon, GET_LEFT_NAV_ITEMS } from "src/shared/utils/left-nav.utils";


const LeftNav: FC<LeftNavProps> = (props: LeftNavProps) => {

  const location = useLocation();

  const [leftNavItems, setLeftNavItems] = useState(GET_LEFT_NAV_ITEMS());

  useEffect(() => {
    const currentMainPath = location.pathname.split("/")[1];
    const newArray = [...GET_LEFT_NAV_ITEMS()];
    const index: number = newArray.findIndex((nav) => {
      return nav.id === currentMainPath;
    });
    if (index > -1) {
      newArray[index].icon = getFilledIcon(currentMainPath);
    }
    setLeftNavItems(newArray);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <List sx={ {p: 0} }>
        { leftNavItems.map((navItem, index) => (
          <React.Fragment key={ navItem.id }>
            {
              (navItem.id === 'about' || navItem.id === 'personal-films') && <Divider sx={ {my: 1} } />
            }

            <ListItem key={ navItem.id } disablePadding sx={ { display: 'block' } }>
              <ListItemButton 
                sx={ {
                  height: 40,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: '22px',
                  py: '5px'
                } }
                component={ NavLink } to={ navItem.url.join("") }
                selected={ navItem.url.join("") === location.pathname || location.pathname.includes(navItem.url.join("")) }
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
          </React.Fragment>
          )) }
      </List>
        
    </React.Fragment>
  );
};

export default LeftNav;
