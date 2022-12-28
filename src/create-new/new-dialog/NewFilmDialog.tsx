/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogProps } from 'src/shared/models/dialog.model';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
 import { Form, Formik, useFormikContext } from 'formik';
import NewFilmForm from './NewFilmForm';
import { newFilmValidationSchema } from '../schemas/all-schemas';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

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
  
  const formSubmitHandler = (payload: any) => {
    console.log(payload);
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

