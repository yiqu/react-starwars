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
import { getFormFields } from '../FormFields';
import NewFilmForm from './NewFilmForm';



const NewFilmDialog = (props: DialogProps) => {

  const initValues = {
    starships: 'NONE_SELECTED'
  };

  const handleClose = (event: any, reason?: string) => {
    if (reason !== 'backdropClick') {
      props.onClose(null);
    }
  };

  const formSubmitHandler = (payload: any) => {
  };

  return (
    <Dialog onClose={ handleClose } open={ props.open } disableEscapeKeyDown maxWidth={ false }
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
        <Grid container>
          <Formik initialValues={ initValues }
              onSubmit={ formSubmitHandler }
            >
            {(formik) => {
              return <div style={ {width: '100%'} }>
                <NewFilmForm />
              </div>;
            }}
          </Formik>
          {/* <Grid xs={ 3 }>
            Name
          </Grid>
          <Grid xs={ 6 }>
            inputinputinputinputinputinput1inputinputinputinputinputinput1
          </Grid> */}
        </Grid>
      </DialogContent>

      <Divider />

      <DialogActions>
        <Button variant="text" startIcon={ <RestartAltIcon /> }>
          Reset
        </Button>
        <Button variant="text" startIcon={ <SaveIcon /> }>
          Save
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default NewFilmDialog;

