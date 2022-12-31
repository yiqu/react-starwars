import { PaletteMode } from '@mui/material';
import * as  fromCartActions from './ThemeActions';

interface ThemeReducerState {
  theme: PaletteMode;
}

export const themeInitialState: ThemeReducerState = {
  theme: 'light',
};

export const themeReducer = (state: ThemeReducerState, action: any) => {
  if (action.type === fromCartActions.TOGGLE_THEME) {

    let nextTheme: PaletteMode = 'light';
    if (state.theme === 'dark') {
      nextTheme = 'light';
    } else {
      nextTheme = 'dark';
    }
    return {
      ...state,
      theme: nextTheme
    };
  };


  return {
    ...state
  };
};