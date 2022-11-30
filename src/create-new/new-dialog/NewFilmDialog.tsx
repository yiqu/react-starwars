/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogProps } from 'src/shared/models/dialog.model';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useEffect, useState } from 'react';
 import { Form, Formik, useFormikContext } from 'formik';
import { NewFilmData } from '../FormFields';
import NewFilmForm from './NewFilmForm';
import { NONE_SELECTED_VALUE } from 'src/shared/models/form.model';
import { validationSchema } from 'src/shared/form/schemas/all-schemas';



const NewFilmDialog = (props: DialogProps) => {

  const initValues: NewFilmData = {
    title: '',
    director: '',
    characters: [],
    starships: NONE_SELECTED_VALUE,
    opening_crawl: '',
    planets: [],
    species: [],
    vehicles: []
  };

  const handleClose = (event: any, reason?: string) => {
    if (reason !== 'backdropClick') {
      props.onClose(null);
    }
  };

  const formSubmitHandler = (payload: any) => {
  };

  return (
    <Dialog onClose={ handleClose } open={ props.open } disableEscapeKeyDown maxWidth={ 'md' }
      PaperProps={ {sx:{minWidth:'calc(100% - 50rem)'}} }>
    
      <DialogTitle bgcolor="primary.main" color="white">
        <Stack direction={ 'row' } justifyContent="space-between" alignItems="center">
          <div>
            { props.isEditMode ? 'Editing' : 'Create New Movie' }
          </div>
          <div>
            <IconButton sx={ {color:'white'} } onClick={ handleClose }>
              <CloseIcon />
            </IconButton>
          </div>
        </Stack>
      </DialogTitle>

      <Divider />

      <DialogContent >
        <Grid container spacing={ 2 }>
          <Formik 
            initialValues={ initValues }
            onSubmit={ formSubmitHandler }
            // validateOnChange={ false }
            // validateOnBlur={ false }
            validationSchema={ validationSchema }
            >
            {(formik) => {
              return <div style={ {width: '100%'} }>
                <NewFilmForm />
              </div>;
            }}
          </Formik>
        </Grid>
      </DialogContent>

      <Divider />

      <DialogActions>
        <Button variant="text" startIcon={ <RestartAltIcon /> }>
          Reset
        </Button>
        <Button variant="text" startIcon={ <SaveIcon /> } >
          Save
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default NewFilmDialog;

