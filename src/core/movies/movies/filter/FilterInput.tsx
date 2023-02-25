/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext, FormikProps } from 'formik';
import * as Yup from 'yup';
import FormInput from 'src/shared/form/m-input/FormInput';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useDebounce } from 'src/shared/hooks/useDebounce';
import { useDeepCompareEffect, useUpdateEffect } from 'react-use';
import { FCC } from 'src/shared/models/fc-children.model';
import { FilmFilterProp } from 'src/shared/models/core-props.model';
import { MoviesFilterInput } from 'src/shared/models/starwars.model';
import { Close, Filter, Search } from '@mui/icons-material';
import { FormInput2Props } from 'src/shared/models/form.model';
import { isEmpty } from 'lodash';

export default function FilterInput({ count, filterChange, placeholderText, currentText }: FilmFilterProp) {

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedTerm = useDebounce<string>(inputValue, 400);

  useUpdateEffect(() => {
    filterChange(debouncedTerm);
  }, [filterChange, debouncedTerm]);

  useEffect(() => {
    if (currentText) {
      setInputValue(currentText);
    }
  }, [currentText]);

  return (
    <TextField name="movieName" type="text" fullWidth
      value={ inputValue }
      onChange={ (e) => setInputValue(e.target.value) }
      placeholder={ placeholderText ?? `Filter by name ${count !== undefined ? ('('+count+')') : ''}` }
      variant='standard'
      InputProps={ {
        endAdornment:(<InputAdornment position='end'>
          { !isEmpty(inputValue) && <IconButton onClick={ () => setInputValue('') } size="small">
            <Close />
            </IconButton> 
          }
        </InputAdornment>),
        startAdornment:(
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        )
      } }
    />
  );
};