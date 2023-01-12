import React, { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routeList from './routes/Routes';
import { useLocalStorage } from 'react-use';
import ThemeContext, { ThemeContextProp } from './theme/ThemeContext';
import { PaletteMode } from '@mui/material';
import { LS_APP_THEME } from './shared/utils/constants';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import SnackbarContext, { SnackbarContextProp } from './shared/context/snackbar/SnackbarContext';

function App() {

  const [theme, setTheme, remove] = useLocalStorage<PaletteMode>(LS_APP_THEME, 'light');
  const themeContext: ThemeContextProp = useContext(ThemeContext);
  const snackbarContext: SnackbarContextProp = useContext(SnackbarContext);

  useEffect(() => {
    themeContext.setTheme(theme!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    snackbarContext.showSnackbar(snackbarContext.status, undefined);
  };

  return (
    <React.Fragment>
      <RouterProvider router={ routeList } />
      <Snackbar 
        open={ !!snackbarContext.message }
        disableWindowBlurListener={ true }
        autoHideDuration={ snackbarContext.status === 'error' ? 20000 : 5000 } 
        onClose={ handleClose }
        anchorOrigin={ {horizontal: 'right', vertical: 'bottom'} }
        key={ snackbarContext.message } >
        <Alert onClose={ handleClose } severity={ snackbarContext.status } sx={ { width: '100%' } }>
          { snackbarContext.message }
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default App;
