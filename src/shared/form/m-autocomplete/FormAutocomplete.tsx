/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FormAutocompleteProps } from 'src/shared/models/form.model';
import { Checkbox, FormControl, FormHelperText } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { upperFirst, startCase } from 'lodash';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon/>;
const checkedIcon = <CheckBoxIcon />;

const FormAutocomplete = ({ label, name, options, dataLoading, placeholder, validate, 
    disabled, ...props}: FormAutocompleteProps) => {
  const formik = useFormikContext<any>();

  const onValueChangeHandler = (event: any, value: any) => {
    formik.setFieldValue(name, value);
  };
  
  return (
    <FormControl fullWidth size='small'>
      <Field as={ Autocomplete } 
        label={ label } 
        name={ name } 
        id={ name } 
        onChange={ onValueChangeHandler } 
        renderInput={ (params: any) => (
          <TextField { ...params }
            name={ name }
            variant="standard"
            label={ startCase((dataLoading ? `Loading ${name}...` : `Select ${name}`)) } 
            placeholder={ upperFirst(placeholder ?? label) }
            error={ formik.touched[name] && !!formik.errors[name] }
            { ...props.renderInputProps }
          />
        ) }
        renderOption= { (props: any, option: any, { selected }: {selected: boolean}) => { return (
          <li { ...props }>
            <Checkbox
              icon={ icon }
              checkedIcon={ checkedIcon }
              checked={ selected }
            />
            { option.name ?? option.display ?? option }
          </li>
        );} }
        getOptionLabel={ (option: any) => option.name ?? option.display ?? option }
        validate={ validate }
        options={ options }
        disabled={ disabled }
        loading={ dataLoading }
        loadingText = { `Loading ${label}` }
        noOptionsText={ `No ${label} available` }
        autoHighlight
        { ...props.props } 
      />

      <FormHelperText id={ `${name}-helper-text` } error={ formik.touched[name] && !!formik.errors[name] }>
        {
          (formik.touched[name] && formik.errors[name]) ? 
            (<ErrorMessage name={ name } render={ (err) => upperFirst(err) } />) : (<>{ props.helperText }</>)
        }
      </FormHelperText>
      
    </FormControl>
  );
};

export default FormAutocomplete;