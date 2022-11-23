/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext, FormikProps } from 'formik';
import * as Yup from 'yup';
import FormInput from 'src/shared/form/m-input/FormInput';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { useDebounce } from 'src/shared/hooks/useDebounce';
import { useDeepCompareEffect } from 'react-use';
import FilterInputForm from './FilterInputForm';
import { FCC } from 'src/shared/models/fc-children.model';
import { FilmFilterProp } from 'src/shared/models/core-props.model';
import { MoviesFilterInput } from 'src/shared/models/starwars.model';
import { Close, Filter, Search } from '@mui/icons-material';


const FilterInput: FCC<FilmFilterProp> = ({ filterChange }) => {

  const initValue = {
    movieName: ''
  };
 
  const filterChangeHandler = useCallback((payload: MoviesFilterInput) => {
    filterChange(payload);
  }, [filterChange]);

  const movieNameFilter = (formik: FormikProps<MoviesFilterInput>): TextFieldProps => {
    const clearInputHandler = () => {
      formik.resetForm();
    };
    const filterInputHasValue = formik.values.movieName !== '';

    return {
      name: 'movieName',
      placeholder: 'Filter by name',
      id: 'movieName',
      variant: 'standard',
      InputProps: {
        endAdornment: (<InputAdornment position='end'>
          { filterInputHasValue && <IconButton onClick={ clearInputHandler }>
            <Close />
          </IconButton> }
        </InputAdornment>),
        startAdornment: (
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        )
      }
    };
  };

  const submitHandler = (payload: any) => {
  };

  return (
    <Formik
      initialValues={ initValue }
      onSubmit={ submitHandler }
    >
      {(formik) => {
        return <FilterInputForm movieNameFilter={ movieNameFilter(formik) } filterChange={ filterChangeHandler } />;
      }}
      
    </Formik>
  );
};

export default FilterInput;