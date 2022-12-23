/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormControlLabel, FormHelperText, InputLabel } from '@mui/material';

const FormCheckbox = ({ label, name, valueChange, ...props}: FormInput2Props) => {
  const formik = useFormikContext<any>();
  return (
    <>
      <FormControl fullWidth>

        <Field as={ FormControlLabel } 
          type="checkbox"
          label={ label } 
          name={ name } 
          id={ name }
          onChange={ (e: any, value: string) => formik.setFieldValue(name, value || false) }
          { ...props.props } />

      </FormControl>
    </>
  );
};

export default FormCheckbox;