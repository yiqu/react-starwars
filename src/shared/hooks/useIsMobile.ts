import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

/**
 * A media query string
 * which matches screen widths less than the screen size given by the breakpoint key (down)
 * @returns 
 */
const useScreenSize = () => {

  const theme = useTheme();

  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down('sm'));

  const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  const isLargeSize = useMediaQuery(theme.breakpoints.down('lg'));

  const isXlSize = useMediaQuery(theme.breakpoints.down('xl'));

  return {
    isMobile: isMobileScreenSize,
    isMed: isMediumSize,
    isLg: isLargeSize,
    isXl: isXlSize
  };

};

export default useScreenSize;