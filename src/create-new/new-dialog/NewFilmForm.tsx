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

  const [ formFields, setFormFields ] = useState<GenericFormFieldObject[]>([]);

  const { data: peopleListData, isError, loading: peopleListLoading } = 
    useSwGet<StarwarsContent>('people', DEFAULT_MAX_PAGE_PARAMS);

  const { data: starshipsList, isError: starshipsError, loading: starshipsLoading } = 
    useSwGet<StarwarsContent>('starships', DEFAULT_MAX_PAGE_PARAMS);

  const { data: vehiclesList, isError: vehiclesError, loading: vehiclesLoading } = 
    useSwGet<StarwarsContent>('vehicles', DEFAULT_MAX_PAGE_PARAMS);

  const { data: planetList, isError: planetsError, loading: planetsLoading } = 
    useSwGet<StarwarsContent>('planets', DEFAULT_MAX_PAGE_PARAMS);

  const { data: speciesList, isError: speciesError, loading: speciesLoading } = 
    useSwGet<StarwarsContent>('species', DEFAULT_MAX_PAGE_PARAMS);
  
  useEffect(() => {
    console.log(formikContext.values);
  }, [formikContext.values]);

  useEffect(() => {
    setFormFields(defaultFormFields);
  }, []);

  useEffect(() => {
    if (peopleListData && peopleListData.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'characters';
        });
        fields[index].props.options = peopleListData;
        fields[index].props.loading = false;
        return fields;
      });
    }
  }, [peopleListData]);

  useEffect(() => {
    if (starshipsList && starshipsList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'starships';
        });
        fields[index].props.options = starshipsList;
        fields[index].props.loading = false;
        return fields;
      });
    }
  }, [starshipsList]);

  useEffect(() => {
    if (vehiclesList && vehiclesList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'vehicles';
        });
        fields[index].props.options = vehiclesList;
        fields[index].props.loading = false;
        return fields;
      });
    }
  }, [vehiclesList]);

  useEffect(() => {
    if (planetList && planetList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'planets';
        });
        fields[index].props.options = planetList;
        fields[index].props.loading = false;
        return fields;
      });
    }
  }, [planetList]);

  useEffect(() => {
    if (speciesList && speciesList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'species';
        });
        fields[index].props.options = speciesList;
        fields[index].props.loading = false;
        return fields;
      });
    }
  }, [speciesList]);


  return (
    <Form>
      <Grid container spacing={ 2 }>
        { formFields.map((field) => {
          return (
            <Grid key={ field.name } xs={ 12 } >
              { CreateFormFields(field) }
            </Grid>
          );
        }) 
      }
      </Grid>
    </Form>
  );
};

export default NewFilmForm;

export const defaultFormFields: GenericFormFieldObject[] = [
  {
    name: 'title',
    label: 'Title',
    helperText: 'Your film title',
    type: 'text',
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'director',
    label: 'Director',
    helperText: 'Yourself! Or someone else..',
    type: 'text',
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'characters',
    label: 'Characters',
    helperText: 'Core people in your film',
    type: 'autocomplete',
    props: {
      options: [],
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
        <TextField { ...params } label="Select your characters" placeholder="Characters" variant='outlined' />
      ),
      noOptionsText: 'No characters available',
      loadingText: 'Loading characters...',
      loading: true
    }
  },
  {
    name: 'openingCrawl',
    label: 'Opening Crawl Text',
    type: 'textarea',
  },
  {
    name: 'planets',
    label: 'Planets',
    type: 'autocomplete',
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
    }
  },
  {
    name: 'species',
    label: 'Species',
    type: 'autocomplete',
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
    }
  },
  {
    name: 'vehicles',
    label: 'Vehicles',
    type: 'autocomplete',
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
    }
  },
  {
    name: 'starships',
    label: 'starships',
    type: 'autocomplete',
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
    }
  }
];