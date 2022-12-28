import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#092250',
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Poppins'].join(','),
    subtitle1: {
      fontWeight: 300
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
        }
      },
      defaultProps: {
        primaryTypographyProps: {
          style: {
            whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'
          }
        },
        secondaryTypographyProps: {
          style: {
            whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#888'
        }
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={ mainTheme }>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
