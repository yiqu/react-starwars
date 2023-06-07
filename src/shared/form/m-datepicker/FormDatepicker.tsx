/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormDatepickerProps, FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { upperFirst, startCase } from 'lodash';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';


const FormDatepicker = ({ label, name, validate, 
    disabled, placeholder, variant, ...props}: FormDatepickerProps) => {
      
  const formik = useFormikContext<any>();
  return (
    <FormControl fullWidth>
      <Field as={ DatePicker } 
        label={ startCase(label) } 
        formatDensity="spacious"
        name={ name } 
        id={ name }
        error={ formik.touched[name] && !!formik.errors[name] }
        validate={ validate }
        disabled={ disabled }
        slotProps={ {
          textField: {size: 'medium'}
        } }
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

export default FormDatepicker;