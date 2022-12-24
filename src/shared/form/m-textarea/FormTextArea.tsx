/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { upperFirst } from 'lodash';

const FormTextArea = ({ label, name, valueChange, validate, ...props}: FormInput2Props) => {
  const formik = useFormikContext<any>();
  return (
    <>
      <FormControl fullWidth>

        { (props.showLabel && !formik.values[name]) && <InputLabel htmlFor={ name }>{ label }</InputLabel> }

        <Field as={ TextField } 
          multiline
          name={ name } 
          id={ name }
          validate={ validate }
          minRows={ 1 }
          error={ formik.touched[name] && !!formik.errors[name] }
          InputProps={ {
            inputComponent: TextareaAutosize,
            inputProps: {
              style: {
                resize: "vertical",
                minHeight: "3.5rem"
              }
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
    </>
  );
};

export default FormTextArea;