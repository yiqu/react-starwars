/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormAutocompleteProps, FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const FormAutocomplete = ({ label, name, valueChange, ...props}: FormAutocompleteProps) => {

  const formik = useFormikContext();

  const onValueChangeHandler = (event: any, value: any) => {
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <FormControl fullWidth>
        {props.showLabel && <InputLabel htmlFor={ name }>{ label }</InputLabel>}

        <Field as={ Autocomplete } label={ label } name={ name } id={ name }
        { ...props.props } onChange={ onValueChangeHandler }/>

        <FormHelperText id={ `${name}-helper-text` }>{ props.helperText }</FormHelperText>

      </FormControl>
    </>
  );
};

export default FormAutocomplete;