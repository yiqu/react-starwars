/* eslint-disable @typescript-eslint/no-unused-vars */
import { Checkbox } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import React, { useEffect, useState } from 'react';
 import { Form, useFormikContext } from 'formik';
import { CreateFormFields } from '../FormFields';
import { StarwarsContent, StarwarsPeople } from 'src/shared/models/starwars.model';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useSwGet from 'src/shared/rest/useSwGet';
import { DEFAULT_MAX_PAGE_PARAMS } from 'src/shared/rest/starwars-api';
import { GenericFormFieldObject } from 'src/shared/models/form.model';

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
        return fields;
      });
    }
  }, [peopleListData]);

  useEffect(() => {
    setFormFields((fields: any[]) => {
      const index = fields.findIndex((field) => {
        return field.name === 'characters';
      });
      fields[index].props.loading = peopleListLoading;
      return [...fields];
    });
  }, [peopleListLoading]);

  useEffect(() => {
    if (starshipsList && starshipsList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'starships';
        });
        fields[index].props.options = starshipsList;
        return fields;
      });
    }
  }, [starshipsList]);

  useEffect(() => {
    setFormFields((fields: any[]) => {
      const index = fields.findIndex((field) => {
        return field.name === 'starships';
      });
      fields[index].props.loading = starshipsLoading;
      return [...fields];
    });
  }, [starshipsLoading]);

  useEffect(() => {
    if (vehiclesList && vehiclesList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'vehicles';
        });
        fields[index].props.options = vehiclesList;
        return fields;
      });
    }
  }, [vehiclesList]);

  useEffect(() => {
    setFormFields((fields: any[]) => {
      const index = fields.findIndex((field) => {
        return field.name === 'vehicles';
      });
      fields[index].props.loading = vehiclesLoading;
      return [...fields];
    });
  }, [vehiclesLoading]);

  useEffect(() => {
    if (planetList && planetList.length > -1) {
      setFormFields((fields: any[]) => {
        const index = fields.findIndex((field) => {
          return field.name === 'planets';
        });
        fields[index].options = planetList;
        return [...fields];
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
        return fields;
      });
    }
  }, [speciesList]);

  useEffect(() => {
    setFormFields((fields: any[]) => {
      const index = fields.findIndex((field) => {
        return field.name === 'species';
      });
      fields[index].props.loading = speciesLoading;
      return [...fields];
    });
  }, [speciesLoading]);


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
    type: 'text',
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'director',
    label: 'Director',
    type: 'text',
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'characters',
    label: 'Characters',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    props: {
      options: [],
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsContent) => option.name,
      renderOption: (props: any, option: StarwarsContent, { selected }: {selected: boolean}) => { return (
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
      ChipProps: {
        color: 'primary'
      },
      noOptionsText: 'No characters available',
      loadingText: 'Loading characters...',
    }
  },
  {
    name: 'openingCrawl',
    label: 'Opening Crawl Text',
    type: 'textarea',
    helperText: 'Opening Crawl',
    showLabel: true,
  },
  {
    name: 'planets',
    label: 'Planet',
    type: 'select',
    options: [],
    props: {
      variant: 'outlined',
    }
  },
  {
    name: 'species',
    label: 'Species',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
      renderOption: (props: any, option: StarwarsContent, { selected }: {selected: boolean}) => { return (
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
      ChipProps: {
        color: 'primary'
      },
      noOptionsText: 'No species available',
      loadingText: 'Loading species...',
    }
  },
  {
    name: 'vehicles',
    label: 'Vehicles',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
      renderOption: (props: any, option: StarwarsContent, { selected }: {selected: boolean}) => { return (
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
      ChipProps: {
        color: 'primary'
      },
      noOptionsText: 'No vehicles available',
      loadingText: 'Loading vehicles...',
    }
  },
  {
    name: 'starships',
    label: 'starships',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    props: {
      autoHighlight: true,
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
      renderOption: (props: any, option: StarwarsContent, { selected }: {selected: boolean}) => { return (
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
      ChipProps: {
        color: 'primary'
      },
      noOptionsText: 'No starships available',
      loadingText: 'Loading starships...',
    }
  }
];