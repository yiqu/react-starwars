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


const NewFilmForm = () => {

  const formikContext = useFormikContext();

  useEffect(() => {
    console.log(formikContext.values);
  }, [formikContext.values]);

  const [formFields, setFormFields] = useState<any[]>([]);

  useEffect(() => {
    setFormFields(defaultFormFields);
  }, []);

  return (
    <Form>
      { formFields.map((field) => {
        return (
          <Grid key={ field.name } xs={ 12 }>
            { getFormFields(field) }
          </Grid>
        );
      }) }
    </Form>
  );
};

export default NewFilmForm;

export const defaultFormFields = [
  {
    name: 'starships',
    label: 'starships',
    options: [
      {
        display: 'ONE',
        value: '1'
      }
    ],
    useDefaultNoneSelected: 'your starships',
    props: {
      variant: "outlined",
    }
  }
];