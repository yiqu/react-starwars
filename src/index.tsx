import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-tooltip/dist/react-tooltip.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { ThemeContextProvider } from './theme/ThemeContext';
import { SnackbarContextProvider } from './shared/context/snackbar/SnackbarContext';
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={ appStore }>
    <ThemeContextProvider>
      <SnackbarContextProvider>
        <App />
      </SnackbarContextProvider>
    </ThemeContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
