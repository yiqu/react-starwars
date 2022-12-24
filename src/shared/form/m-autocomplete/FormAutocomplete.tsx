/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormAutocompleteProps, FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { upperFirst } from 'lodash';


const FormAutocomplete = ({ label, name, options, loading, validate, ...props}: FormAutocompleteProps) => {
  const formik = useFormikContext<any>();

  const onValueChangeHandler = (event: any, value: any) => {
    formik.setFieldValue(name, value);
  };
  return (
    <>
      <FormControl fullWidth>

        { props.showLabel && <InputLabel htmlFor={ name }>{ label }</InputLabel> }

        <Field as={ Autocomplete } 
          label={ label } 
          name={ name } 
          id={ name } 
          onChange={ onValueChangeHandler } 
          renderInput={ (params: any) => (
            <TextField { ...params }
              name={ name }
              variant="standard"
              label={ loading ? `Loading ${name}...` : `Select ${name}` } 
              placeholder={ label }
              error={ formik.touched[name] && !!formik.errors[name] }
              { ...props.renderInputProps }
            />
          ) }
          getOptionLabel={ (option: any) => option.id }
          validate={ validate }
          options={ options }
          loading={ loading }
          { ...props.props } 
        />

        <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
          {
            (formik.touched[name] && formik.errors[name]) ? 
              (<ErrorMessage name={ name } render={ (err) => upperFirst(err) } />) : (<>{ props.helperText }</>)
          }
        </FormHelperText>
       
      </FormControl>
    </>
  );
};

export default FormAutocomplete;