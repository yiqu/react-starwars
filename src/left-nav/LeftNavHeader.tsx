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
import { LeftNavHeaderProps } from 'src/shared/models/nav-item.model';
import { useState } from 'react';
import { Link, useLocation, useNavigation } from 'react-router-dom';
import { getRandomArbitrary } from 'src/shared/utils/number.utils';
import { yellow } from '@mui/material/colors';
import { Stack } from '@mui/material';
import { flexCenter } from 'src/shared/utils/css.utils';


const LOGO_LIST = [falconLogo, vaderLogo, saberLogo, dstarLogo];

function LeftNavHeader({ closeDrawerHandler }: LeftNavHeaderProps) {

  const leftNavTitle = 'SWDB';
  const theme = useTheme();
  const location = useLocation();
  const navigation = useNavigation();

  const handleDrawerClose = () => {
    closeDrawerHandler(false);
  };

  const [displayLogo, setDisplayLogo] = useState(falconLogo);

  useEffect(() => {
    setDisplayLogo(LOGO_LIST[getRandomArbitrary(0, LOGO_LIST.length-1)]);
  }, [location.pathname]);

  return (
    <DrawerHeader >
      <Link to={ "/" } style={ {color: '#000'} }>
        <Stack direction="row" sx={ {...flexCenter} }>
          <Typography component="img" src={ displayLogo } sx={ {height: '2rem', mr: '10px'} } alt="logo"></Typography>
          <Typography variant='h6' color={ navigation.state === 'loading' ? yellow[800] : undefined }>{ leftNavTitle }</Typography>
        </Stack>
      </Link>
        
      <IconButton onClick={ handleDrawerClose }>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

export default LeftNavHeader;