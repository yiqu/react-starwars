import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routeList from './routes/Routes';

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={ routeList } />
    </React.Fragment>
  );
}

export default App;
