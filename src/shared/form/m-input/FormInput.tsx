/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInputProps } from 'src/shared/models/form.model';

const FormInput = ({ label, name, valueChange, ...props}: FormikInputProps) => {

  const { values, submitForm } = useFormikContext<any>();

  useEffect(() => {
    valueChange(values.movieName);
  }, [values.movieName, valueChange]);

  return (
    <>
      { props.showLabel && <label htmlFor={ name }>{ label} </label> }
      <Field as={ TextField } label={ label } name={ name } id={ name }
        { ...props } sx={ {width: '100%'} } />
    </>
  );
};

export default FormInput;