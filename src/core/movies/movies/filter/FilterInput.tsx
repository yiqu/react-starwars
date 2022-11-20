/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormInput from 'src/shared/form/m-input/FormInput';
import { TextFieldProps } from '@mui/material';

const FilterInput = () => {

  const initValue = {
    movieName: ''
  };
  const filterChangeHandler = useCallback((payload: any) => {
    console.log('filter:', payload);
  }, []);

  const movieNameFilter: TextFieldProps = {
    name: 'movieName',
    label: 'Filter by movie name',
    placeholder: 'Enter a movie name...',
    id: 'movieName',
    variant: 'standard',
  };

  const submitHandler = (payload: any) => {
    console.log(payload);
  };

  return (
    <Formik
      initialValues={ initValue }
      onSubmit={ submitHandler }
    >
      <Form autoComplete="off">
        <FormInput { ...movieNameFilter } valueChange={ filterChangeHandler } />
      </Form>
      
    </Formik>
  );
};

export default FilterInput;