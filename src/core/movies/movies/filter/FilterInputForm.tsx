/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormInput from 'src/shared/form/m-input/FormInput';
import { useDebounce } from 'src/shared/hooks/useDebounce';
import { useDeepCompareEffect } from 'react-use';
import { MoviesFilterInput } from 'src/shared/models/starwars.model';


const FilterInputForm = ({...props}) => {

  const { values, submitForm } = useFormikContext<any>();

  const debouncedTerm = useDebounce<MoviesFilterInput>(values, 600);

  useDeepCompareEffect(() => {
    props.filterChange(debouncedTerm);
  }, [debouncedTerm]);

  return (
    <Form autoComplete="off">
      <FormInput { ...props.movieNameFilter } />
    </Form>
  );
};

export default FilterInputForm;