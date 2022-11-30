/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Checkbox, Divider, IconButton, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useEffect, useState } from 'react';
 import { Form, Formik, useFormikContext } from 'formik';
import { CreateFormFields } from '../FormFields';
import { StarwarsContent, StarwarsPeople } from 'src/shared/models/starwars.model';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useSwGet from 'src/shared/rest/useSwGet';
import { DEFAULT_MAX_PAGE_PARAMS } from 'src/shared/rest/starwars-api';
import * as _ from "lodash";
import { AsyncFormFieldOptions, GenericFormFieldObject } from 'src/shared/models/form.model';
import FormInput from 'src/shared/form/m-input/FormInput';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const NewFilmForm = (props: any) => {

  const formikContext = useFormikContext<any>();
  const [ selectOptions, setSelectOptions ] = useState<AsyncFormFieldOptions<any>>({});
  const [ formFields, setFormFields ] = useState<GenericFormFieldObject[]>([]);
  const { data: peopleListData, isError, loading } = useSwGet<StarwarsContent>('people', DEFAULT_MAX_PAGE_PARAMS);
  const { data: starshipsList, isError: starshipsError, loading: starshipsLoading } = 
    useSwGet<StarwarsContent>('starships', DEFAULT_MAX_PAGE_PARAMS);
  const { data: vehiclesList, isError: vehiclesError, loading: vehiclesLoading } = 
    useSwGet<StarwarsContent>('vehicles', DEFAULT_MAX_PAGE_PARAMS);
  
  useEffect(() => {
    console.log(formikContext.values);
  }, [formikContext.values]);

  useEffect(() => {
    setFormFields(defaultFormFields);
  }, []);

  useEffect(() => {
    setSelectOptions((res) => {
      return {
        ...res,
        characters: {
          options: peopleListData,
          loading
        }
      };
    });
  }, [peopleListData, loading]);


  return (
    <Form>
      { formFields.map((field) => {
          return (
            <Grid key={ field.name } xs={ 12 } md={ 12 } xl={ 6 }>
              { CreateFormFields(field, selectOptions) }
            </Grid>
          );
        }) 
      }
    </Form>
  );
};

export default NewFilmForm;

export const defaultFormFields: GenericFormFieldObject[] = [
  {
    name: 'title',
    label: 'Title',
    helperText: 'Your film title',
  },
  {
    name: 'director',
    label: 'Director',
    helperText: 'Yourself! Or someone else..',
  },
  {
    name: 'characters',
    label: 'Characters',
    helperText: 'Core people in your film',
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
      renderOption: (props: any, option: StarwarsPeople, { selected }: {selected: boolean}) => { return (
        <li { ...props } style={ {height: '2rem'} }>
          <Checkbox
            icon={ icon }
            checkedIcon={ checkedIcon }
            style={ { marginRight: 8 } }
            checked={ selected }
          />
          {option.name}
        </li>
      );},
      renderInput: (params: any) => (
        <TextField { ...params } label="Select your characters" placeholder="Characters" />
      ),
      noOptionsText: 'No characters available',
      loadingText: 'Loading characters...'
    }
  },
  {
    name: 'openingCrawl',
    label: 'Opening Crawl Text',
  },
  {
    name: 'planets',
    label: 'Planets',
  },
  {
    name: 'species',
    label: 'Species',
  },
  {
    name: 'vehicles',
    label: 'Vehicles',
  },
  {
    name: 'starships',
    label: 'starships',
    useDefaultNoneSelected: 'your starships',
    props: {
      variant: "outlined",
      size: 'small'
    }
  }
];