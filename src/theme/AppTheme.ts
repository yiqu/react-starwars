import { PaletteMode, ThemeOptions } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';
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
          primary: {
            main: '#092250',
          }
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
          MuiToolbar: {
            styleOverrides: {
              root: {
                // backgroundColor: '#fff',
                // color: '#000'
              }
            }
          }
        }
        : 
        {
          // palette values for dark mode
        }
      ),
    },
  };
  
};

export const MyAppTheme: Theme = createTheme({
  palette: MyPaletteOptions,
  typography: MyTypography,
  components: MyComponents,
});

