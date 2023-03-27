/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FormInput2Props } from 'src/shared/models/form.model';
import { FormControl, FormHelperText } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { upperFirst, startCase } from 'lodash';

const FormTextArea = ({ label, name, placeholder, disabled, validate, ...props}: FormInput2Props) => {
  const formik = useFormikContext<any>();
  return (
    <FormControl fullWidth size='small'>

      <Field as={ TextField } 
        multiline
        name={ name } 
        id={ name }
        validate={ validate }
        minRows={ 1 }
        label={ startCase(label) }
        error={ formik.touched[name] && !!formik.errors[name] }
        placeholder={ upperFirst(placeholder ?? label) }
        InputProps={ {
          inputComponent: TextareaAutosize,
          inputProps: {
            style: {
              resize: "vertical",
              minHeight: "3.5rem"
            },
          }
        } }
        { ...props.props } />

      <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
        {
          (formik.touched[name] && formik.errors[name]) ? 
            (<ErrorMessage name={ name } render={ (err) => upperFirst(err) } />) : (<>{props.helperText}</>)
        }
      </FormHelperText>

    </FormControl>
  );
};

export default FormTextArea;