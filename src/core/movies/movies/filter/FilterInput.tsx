/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormInput from 'src/shared/form/m-input/FormInput';
import { TextFieldProps } from '@mui/material';
import { useDebounce } from 'src/shared/hooks/useDebounce';
import { useDeepCompareEffect } from 'react-use';
import FilterInputForm from './FilterInputForm';
import { FCC } from 'src/shared/models/fc-children.model';
import { FilmFilterProp } from 'src/shared/models/core-props.model';


const FilterInput: FCC<FilmFilterProp> = ({ filterChange }) => {

  const initValue = {
    movieName: ''
  };
 
  const filterChangeHandler = useCallback((payload: any) => {
    filterChange(payload);
  }, [filterChange]);

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
      <FilterInputForm movieNameFilter={ movieNameFilter } filterChange={ filterChangeHandler } />
      
    </Formik>
  );
};

export default FilterInput;