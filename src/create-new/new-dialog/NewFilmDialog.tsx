/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogProps } from 'src/shared/models/dialog.model';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle, Box, Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
 import { Form, Formik, useFormikContext } from 'formik';
import NewFilmForm from './NewFilmForm';
import { newFilmValidationSchema } from '../schemas/all-schemas';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { createNewFilm } from '../http/crud';

export interface NewFilmData {
  title: string;
  director: string;
  characters: string[];
  starships: string[];
  openingCrawl: string;
  planets: string;
  species: string[];
  vehicles: string[];
  canon: boolean;
}

const initValues: NewFilmData = {
  title: '',
  director: '',
  characters: [],
  starships: [],
  openingCrawl: 'In a galaxy far far away...',
  planets: '',
  species: [],
  vehicles: [],
  canon: false
};

const NewFilmDialog = ({ onClose, open, isEditMode }: DialogProps) => {
  
  const handleClose = useCallback((event?: any, reason?: string) => {
    if (reason !== 'backdropClick') {
      onClose(null);
    }
  }, [onClose]);

  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  
  const formSubmitHandler = (payload: any) => {
    setErrorMsg(undefined);
    if (payload) {
      createNewFilm({
        film: payload,
        onSuccess: ((res) => {
          onClose(res);
        }),
        onFailure: ((err) => {
          setErrorMsg(`${err.response?.data}`);
        })
      });
    }
  };

  return (
     
    <Formik 
      initialValues={ initValues }
      onSubmit={ formSubmitHandler }
      validationSchema={ newFilmValidationSchema } >
      {(formik) => {
        return <>
          <Dialog onClose={ handleClose } open={ open } disableEscapeKeyDown >

            <NewFilmForm handleClose={ handleClose } isEditMode={ isEditMode } />

            {
              errorMsg && 
              <Alert severity="error">
                <AlertTitle>API Error</AlertTitle>
                <Box>
                  An API error occurred: {errorMsg}
                </Box>
              </Alert>
            }

            <DialogActions>
              <Button variant="text" startIcon={ <RestartAltIcon /> } onClick={ formik.handleReset }>
                Reset
              </Button>
              <Button variant="text" startIcon={ <SaveIcon /> } onClick={ formik.submitForm }>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </>;
      }}
    </Formik>
  );
};

export default NewFilmDialog;

