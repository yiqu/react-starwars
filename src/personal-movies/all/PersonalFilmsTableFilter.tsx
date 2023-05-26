import { Clear } from "@mui/icons-material";
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "src/shared/hooks/useDebounce";

export interface TableFilterProp {
  onFilterChange: (filters: QueryFilter[]) => void;
}

function TableFilter({ onFilterChange }: TableFilterProp) {

  const [localFilter, setLocalFilter] = useState<FilterValue>(getDefaultFilter);
  const debouncedFilter = useDebounce<FilterValue>(localFilter, 500);

  useEffect(() => {
    const filtersToEmit: QueryFilter[] = [];
    Object.keys(debouncedFilter).forEach((key) => {
      if (key === 'name' || key === 'director') {
        if (debouncedFilter[key].trim() !== '') {
          const q: QueryFilter = {property: key, criteria: 'EQ', value: debouncedFilter[key]};
          filtersToEmit.push(q);
        }
      }
    });
    onFilterChange(filtersToEmit);
  }, [debouncedFilter, onFilterChange]);

  const handleTextFilterChange = (filterType: string) => (e: any) => {
    setLocalFilter((current) => {
      return {
        ...current,
        [filterType]: e.target.value
      };
    });
  };

  const handleRestTextFilter = (filterType: string) => () => {
    setLocalFilter((current) => {
      return {
        ...current,
        [filterType]: ''
      };
    });
  };

  return (
    <Box width="100%">
      <FormControl fullWidth variant="standard">
        <InputLabel >Filter by Title</InputLabel>
        <Input size="medium"
          onChange={ handleTextFilterChange('name') }
          value={ localFilter.name }
          endAdornment={
            <InputAdornment position="end">
              <IconButton size="small"
                onClick={ handleRestTextFilter('name') }
              >
                {<Clear />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default TableFilter;

export interface FilterValue {
  name: string;
  director: string;
}

export interface QueryFilter {
  property: string;
  criteria: "EQ" | "IN";
  value: string;
}

function getDefaultFilter() {
  return {
    name: '',
    director: ''
  };
}