/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikProps, useFormikContext } from 'formik';
import { FormikInputProps, FormInput2Props, FormInputProps } from 'src/shared/models/form.model';
import { FormControl, FormControlLabel, FormHelperText, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { upperFirst, startCase } from 'lodash';

const FormCheckbox = ({ label, name, props, disabled }: FormInput2Props) => {
  const formik = useFormikContext<any>();
  return (
    <FormControl fullWidth size='small'>
      <Field as={ FormControlLabel } 
        control={ <Checkbox checked={ !!formik.values[name] } 
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue(name, e.target.checked || false) }/> }
        label={ startCase(label) } 
        name={ name } 
        id={ name }
        disabled={ disabled }
        { ...props } />
    </FormControl>
  );
};

export default FormCheckbox;