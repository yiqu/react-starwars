import { Autocomplete, AutocompleteRenderInputParams, InputAdornment, TextField, Stack, Box } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useEffect, useState } from "react";
import { useUpdateEffect } from "react-use";
import { useSearchContentQuery } from "src/core/store/swapi/swapi";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { useDebounce } from "src/shared/hooks/useDebounce";
import { ResultProperty, StarwarsSearchable } from "src/shared/models/starwars.model";

export interface SearchAutoCompleteProps {
  entity: string;
  onResultSelect: (selection: ResultProperty<StarwarsSearchable> | null) => void;
}

function SearchAutoComplete({ entity, onResultSelect }: SearchAutoCompleteProps) {

  // dropdown options
  const [options, setOptions] = useState<readonly ResultProperty<StarwarsSearchable>[]>([]);
  // dropdown selection
  const [value, setValue] = useState<ResultProperty<StarwarsSearchable> | null>(null);
  // user text input
  const [inputValue, setInputValue] = useState<string | null>(null);
  const debouncedInputValue = useDebounce<string | null>(inputValue, 600);

  const { data, isFetching, error, isError, refetch } = useSearchContentQuery(debouncedInputValue ? {
    entity,
    name: debouncedInputValue
  } : skipToken);

  useEffect(() => {
    setOptions(data ?? []);
  }, [data]);

  useUpdateEffect(() => {
  }, [debouncedInputValue]);

  /**
   * Drop down selection change
   * @param selected selected from dropdown
   */
  const onChangeHandler = (selected: ResultProperty<StarwarsSearchable> | null) => {
    setOptions(selected ? [selected] : options);
    setValue(selected);
    onResultSelect(selected);
  };

  /**
   * Input text change
   * @param event 
   * @param value user's input text
   */
  const onInputChangeHandler = (event: any, value: string) => {
    setInputValue(value);
  };

  const onRenderOption = (props: any, option: any) => {
  };

  return (
    <Stack direction="row" justifyContent="start" alignItems="center" width="100%">
      <Autocomplete
        disablePortal
        id="search-entity-autocomplete"
        options={ options }
        fullWidth
        autoHighlight
        blurOnSelect
        filterOptions={ (x) => x }
        value={ value }
        getOptionLabel={ (option) => {
          return option.properties.name;
        } }
        noOptionsText = { `Search for ${entity}` }
        loading= { isFetching }
        renderInput={ (params: AutocompleteRenderInputParams) => <AutoCompleteTextField params={ params } entity={ entity } /> }
        onChange={ (event: any, newValue: ResultProperty<StarwarsSearchable> | null) => {
          onChangeHandler(newValue);
        } }
        onInputChange={ (event, newInputValue) => onInputChangeHandler(event, newInputValue) }
        isOptionEqualToValue = { (option: ResultProperty<StarwarsSearchable>, value: ResultProperty<StarwarsSearchable>) => { return option.uid === value.uid; } }
      />
      <Box ml={ 2 }>
        { isFetching && <ProgressCircle size={ 20 } /> }
      </Box>
    </Stack>
  );
}

export default SearchAutoComplete;

function AutoCompleteTextField({params, entity}: {params: AutocompleteRenderInputParams, entity: string}) {
  return (
    <TextField { ...params } label={ `Filter ${entity}` } variant="standard" />
  );
}