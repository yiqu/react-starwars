import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import routeList from './routes/Routes';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { getMyTheme } from './theme/AppTheme';

function App() {

  const theme: Theme = useMemo(() => {
    return createTheme(getMyTheme('light'));
  }, []);
  
  return (
    <ThemeProvider theme={ theme }>
      <React.Fragment>
        <RouterProvider router={ routeList } />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
