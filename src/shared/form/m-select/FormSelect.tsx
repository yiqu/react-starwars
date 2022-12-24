/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormSelectProps, NONE_SELECTED_VALUE } from 'src/shared/models/form.model';
import { FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { upperFirst } from 'lodash';


const FormikSelect = ({ label, name, options, validate, ...props}: FormSelectProps) => {
  const formik = useFormikContext<any>();

  return (
    <>
      <FormControl fullWidth size={ 'small' }>

        <InputLabel id={ name }>{ label }</InputLabel>

        <Field as={ Select } 
          label={ label } 
          name={ name } 
          id={ name } 
          validate={ validate }
          variant="standard"
          error={ formik.touched[name] && !!formik.errors[name] }
          { ...props.props } >
          {
            props.useDefaultNoneSelected && (
            <MenuItem value={ NONE_SELECTED_VALUE } key={ '' } disabled>
              <Typography sx={ {color: '#666'} }>Select { props.useDefaultNoneSelected }</Typography>
            </MenuItem>
            ) 
          }
          {
            options?.map((opt) => {
              const display = opt.name ?? opt;
              const value = opt.value ?? opt;
              return (
                <MenuItem value={ value } key={ opt.id ?? opt.uid }>{ display }</MenuItem>
              );
            })
          }

        </Field>
        <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
          {
            (formik.touched[name] && formik.errors[name]) ? 
              (<ErrorMessage name={ name } render={ (err) => upperFirst(err) } />) : (<>{props.helperText}</>)
          }
        </FormHelperText>
      </FormControl>
      
    </>
  );
};

export default FormikSelect;