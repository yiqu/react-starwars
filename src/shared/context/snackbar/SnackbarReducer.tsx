import * as  fromActions from './SnackbarAction';
import produce from 'immer';
import { AlertColor } from '@mui/material';

interface SnackbarReducerState {
  status: AlertColor;
  message?: string;
}

export const snackbarInitialState: SnackbarReducerState = {
  status: 'info',
  message: undefined
};

export const snackbarReducer = (state: SnackbarReducerState, action: any): SnackbarReducerState => {
  if (action.type === fromActions.SHOW_SNACK_BAR) {

    const status: AlertColor = action.payload.status;
    const message: string | undefined = action.payload.message;

    const nextState: SnackbarReducerState = produce(state, (draft) => {
      draft.message = message;
      draft.status = status;
    });

    return nextState;
  };


  return {
    ...state
  };
};