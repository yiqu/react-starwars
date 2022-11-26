/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';

const FormInput = ({ label, name, valueChange, ...props}: FormInput2Props) => {

  return (
    <>
      <FormControl fullWidth>
        {props.showLabel && <InputLabel htmlFor={ name }>{ label }</InputLabel>}

        <Field as={ TextField } label={ label } name={ name } id={ name }
        { ...props.props } />

        <FormHelperText id={ `${name}-helper-text` }>{ props.helperText }</FormHelperText>

      </FormControl>
    </>
  );
};

export default FormInput;