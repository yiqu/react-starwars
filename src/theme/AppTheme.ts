import { PaletteMode, ThemeOptions } from '@mui/material';
import { MyComponents } from './components';
import { MyPaletteOptions } from './palette';
import { MyTypography } from './typography';

export const getMyTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      ...(
        mode === 'light' ? 
        {
          // palette values for light mode
          ...MyPaletteOptions
        }
        : 
        {
          // palette values for dark mode
        }
      )
    },
    typography: MyTypography,
    components: {
      ...MyComponents,
      ...( 
        mode === 'light' ? 
        {
            // palette values for light mode
        }
        : 
        {
          // palette values for dark mode
        }
      ),
    },
  };
  
};
