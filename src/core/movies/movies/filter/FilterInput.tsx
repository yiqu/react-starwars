import React, { useCallback, useEffect, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useDebounce } from 'src/shared/hooks/useDebounce';
import { useDeepCompareEffect, useUpdateEffect } from 'react-use';
import { FilmFilterProp } from 'src/shared/models/core-props.model';
import { Close, Filter, Search } from '@mui/icons-material';
import { isEmpty } from 'lodash';

export default function FilterInput({ count, filterChange, placeholderText, currentText }: FilmFilterProp) {

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedTerm = useDebounce<string>(inputValue, 400);

  useUpdateEffect(() => {
    filterChange(debouncedTerm);
  }, [filterChange, debouncedTerm]);

  useEffect(() => {
    setInputValue(currentText ?? '');
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