import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routeList from './routes/Routes';
import { ThemeContextProvider } from './theme/ThemeContext';

function App() {

  return (
    <ThemeContextProvider>
      <React.Fragment>
        <RouterProvider router={ routeList } />
      </React.Fragment>
    </ThemeContextProvider>
    
  );
}

export default App;
