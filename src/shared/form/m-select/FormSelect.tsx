/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormikSelectProps, FormInputProps, FormSelectProps, NONE_SELECTED_VALUE } from 'src/shared/models/form.model';
import { FormHelperText, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const FormikSelect = ({ label, name, ...props}: FormSelectProps) => {

  return (
    <>
      <FormControl fullWidth>

        <InputLabel id={ name }>{ label }</InputLabel>

        <Field as={ Select } label={ label } name={ name } id={ name }
          { ...props.props } >
          {
            props.useDefaultNoneSelected && (
            <MenuItem value={ NONE_SELECTED_VALUE } key={ '' } disabled>
              <em>Select { props.useDefaultNoneSelected }</em>
            </MenuItem>
            ) 
          }
          {
            props.options?.map((opt) => {
              const display = opt.display ?? opt;
              const value = opt.value ?? opt;
              return (
                <MenuItem value={ value } key={ opt.value }>{ display }</MenuItem>
              );
            })
          }
        </Field>
        { props.helperText && <FormHelperText>{ props.helperText }</FormHelperText>}
      </FormControl>
      
    </>
  );
};

export default FormikSelect;