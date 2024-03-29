import React, { useCallback } from 'react';
import {  useReducer } from "react";
import { snackbarInitialState, snackbarReducer } from './SnackbarReducer';
import * as fromActions from './SnackbarAction';
import { AlertColor } from '@mui/material';
import moment from 'moment';


export interface SnackbarContextProp {
  showSnackbar: (status: AlertColor, message?: string) => void;
  message?: string;
  status: AlertColor;
}

const SnackbarContext = React.createContext<SnackbarContextProp>({
  showSnackbar: () => {},
  status: 'info',
  message: '',
});

export function SnackbarContextProvider(props: any) {

  const [snackBarState, dispatchSnackbarAction] = useReducer(snackbarReducer, snackbarInitialState);

  const showSnackbar = useCallback((status: any, message?: string) => {
    dispatchSnackbarAction({type: fromActions.SHOW_SNACK_BAR, payload: {
      status,
      message: message ? `${message} (${moment(new Date().getTime()).format('MM/DD/YY hh:mm:ss A')})` : message
    }});
  }, []);

  return (
    <SnackbarContext.Provider 
      value={ {
        showSnackbar: showSnackbar,
        status: snackBarState.status,
        message: snackBarState.message
      } } >
      { props.children }
    </SnackbarContext.Provider>
  );

};


export default SnackbarContext;