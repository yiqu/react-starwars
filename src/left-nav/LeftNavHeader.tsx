import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import falconLogo from '../static/img/mfalcon.png';
import vaderLogo from '../static/img/darth-vader.png';
import saberLogo from '../static/img/death-star.png';
import dstarLogo from '../static/img/light-saber.png';
import { DrawerHeader } from '../routes/Layouts/layout-components';
import { useTheme } from '@mui/material/styles';
import { FCC } from 'src/shared/models/fc-children.model';
import { LeftNavHeaderProps } from 'src/shared/models/nav-item.model';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getRandomArbitrary } from 'src/shared/utils/number.utils';

const LOGO_LIST = [falconLogo, vaderLogo, saberLogo, dstarLogo];

const LeftNavHeader: FCC<LeftNavHeaderProps> = (props) => {

  const leftNavTitle = 'SWDB';
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerClose = () => {
    props.closeDrawerHandler(false);
  };

  const [displayLogo, setDisplayLogo] = useState(falconLogo);

  useEffect(() => {
    const selected: number = getRandomArbitrary(0, LOGO_LIST.length-1);
    setDisplayLogo(LOGO_LIST[selected]);
  }, [location.pathname]);

  return (
    <DrawerHeader >
      <Typography component='div' sx={ {display: 'flex', flexDirection:"row", alignItems:"center"} }>
        <Typography component="img" src={ displayLogo } sx={ {height: '2rem', mr: '10px'} } alt="logo"></Typography>
        <Typography variant='h6'>{ leftNavTitle }</Typography>
        
      </Typography>
      <IconButton onClick={ handleDrawerClose }>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

export default LeftNavHeader;