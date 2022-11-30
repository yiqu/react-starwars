/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormAutocompleteProps, FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { NewFilmData } from 'src/create-new/FormFields';

const FormAutocomplete = ({ label, name, options, loading, ...props}: FormAutocompleteProps) => {
  const formik = useFormikContext<any>();

  const onValueChangeHandler = (event: any, value: any) => {
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <FormControl fullWidth>
        {props.showLabel && <InputLabel htmlFor={ name }>{ label }</InputLabel>}

        <Field as={ Autocomplete } label={ label } name={ name } id={ name } disabled={ loading }
        { ...props.props } onChange={ onValueChangeHandler } options={ options } loading={ loading }
        renderInput={ (params: any) => (
          <TextField { ...params } label={ loading ? `Loading ${name}...` : `Select ${name}` } placeholder={ label }
            error={ formik.touched[name] && !!formik.errors[name] }/>
        ) }/>

        <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
          {
            (formik.touched[name] && formik.errors[name]) ? (<><ErrorMessage name={ name } /></>) : (<>{props.helperText}</>)
          }
        </FormHelperText>
       
      </FormControl>
    </>
  );
};

export default FormAutocomplete;