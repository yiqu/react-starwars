import React from 'react';
import {  useReducer } from "react";
import { themeInitialState, themeReducer } from './ThemeReducer';
import * as fromThemeActions from './ThemeActions';
import { PaletteMode } from '@mui/material';

export interface ThemeContextProp {
  toggleTheme: () => void,
  currentTheme: PaletteMode;
}

const ThemeContext = React.createContext<ThemeContextProp>({
  toggleTheme: () => {},
  currentTheme: 'light'
});

export function ThemeContextProvider(props: any) {

  const [themeState, dispatchThemeAction] = useReducer(themeReducer, themeInitialState);

  const toggleTheme = () => {
    dispatchThemeAction({type: fromThemeActions.TOGGLE_THEME});
  };

  return (
    <ThemeContext.Provider 
      value={ {
        toggleTheme: toggleTheme,
        currentTheme: themeState.theme
      } } >
      { props.children }
    </ThemeContext.Provider>
  );

};


export default ThemeContext;