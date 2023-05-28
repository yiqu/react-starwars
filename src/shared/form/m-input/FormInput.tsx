/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { upperFirst, startCase } from 'lodash';


const FormInput = ({ label, name, validate, 
    disabled, placeholder, ...props}: FormInput2Props) => {
      
  const formik = useFormikContext<any>();
  return (
    <FormControl fullWidth size='small'>
      <Field as={ TextField } 
        label={ startCase(label) } 
        name={ name } 
        id={ name }
        error={ formik.touched[name] && !!formik.errors[name] }
        validate={ validate }
        variant="standard"
        disabled={ disabled }
        placeholder={ upperFirst(placeholder ?? label) }
        { ...props.props } />

      <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] } sx={ {ml: 0} } >
        {
          (formik.touched[name] && formik.errors[name]) ? 
            (<ErrorMessage name={ name } render={ (err) => upperFirst(err) } />) : (<>{props.helperText}</>)
        }
      </FormHelperText>

    </FormControl>
  );
};

export default FormInput;