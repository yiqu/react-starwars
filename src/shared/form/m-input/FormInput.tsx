/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { upperFirst } from 'lodash';


const FormInput = ({ label, name, valueChange, validate, ...props}: FormInput2Props) => {
  const formik = useFormikContext<any>();
  return (
    <>
      <FormControl fullWidth>

        { props.showLabel && <InputLabel htmlFor={ name }>{ label }</InputLabel> }

        <Field as={ TextField } 
          label={ label } 
          name={ name } 
          id={ name }
          error={ formik.touched[name] && !!formik.errors[name] }
          validate={ validate }
          variant="standard"
          { ...props.props } />

        <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
          {
            (formik.touched[name] && formik.errors[name]) ? 
              (<><ErrorMessage name={ name } render={ (err) => upperFirst(err) } /></>) : (<>{props.helperText}</>)
          }
        </FormHelperText>

      </FormControl>
    </>
  );
};

export default FormInput;