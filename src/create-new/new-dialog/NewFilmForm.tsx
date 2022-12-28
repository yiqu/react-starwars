/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, AlertTitle, Box, Checkbox, DialogContent, DialogTitle, Divider, IconButton, Stack } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import React, { useEffect, useRef, useState } from 'react';
 import { Form, useFormikContext } from 'formik';
import { StarwarsContent, StarwarsPeople } from 'src/shared/models/starwars.model';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { GenericFormFieldObject } from 'src/shared/models/form.model';
import { CreateFormFields } from 'src/shared/form/FormFields';
import useFetchSwEntity, { DEFAULT_MAX_PAGE_PARAMS } from '../hooks/useFetchEntity';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloseIcon from '@mui/icons-material/Close';


const NewFilmForm = ({ handleClose, isEditMode }: {handleClose: () => void; isEditMode?: boolean}) => {
  const formikContext = useFormikContext<any>();
  const formikContextRef = useRef(formikContext);
  const [refetch, triggerRefetch] = useState<number>(0);

  const [ formFields, setFormFields ] = useState<GenericFormFieldObject[]>([]);

  const { data: peopleListData, error: charactersError, loading: peopleListLoading } = 
    useFetchSwEntity<StarwarsContent>({entityType: 'people', sleep: 1000, params: {...DEFAULT_MAX_PAGE_PARAMS, time: refetch}});

  const { data: starshipsList, error: starshipsError, loading: starshipsLoading } = 
    useFetchSwEntity<StarwarsContent>({entityType: 'starships', params: {...DEFAULT_MAX_PAGE_PARAMS, time: refetch}});

  const { data: vehiclesList, error: vehiclesError, loading: vehiclesLoading } = 
    useFetchSwEntity<StarwarsContent>({entityType: 'vehicles', params: {...DEFAULT_MAX_PAGE_PARAMS, time: refetch}});

  const { data: planetList, error: planetsError, loading: planetsLoading } = 
    useFetchSwEntity<StarwarsContent>({entityType: 'planets', params: {...DEFAULT_MAX_PAGE_PARAMS, time: refetch}});

  const { data: speciesList, error: speciesError, loading: speciesLoading } = 
    useFetchSwEntity<StarwarsContent>({entityType: 'species', params: {...DEFAULT_MAX_PAGE_PARAMS, time: refetch}});
  

  useEffect(() => {
    setFormFields(defaultFormFields);
  }, []);

    useEffect(() => {
    formikContextRef.current.resetForm();
  }, [refetch]);

  const handleRefresh = () => {
    triggerRefetch(new Date().getTime());
  };

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
    <>
      <DialogTitle bgcolor="primary.main" color="white">
        <Stack direction={ 'row' } justifyContent="space-between" alignItems="center">
          <Stack>
            { isEditMode ? 'Editing' : 'Create New Movie' }
          </Stack>
          <Stack direction="row">
            <IconButton sx={ {color:'white'} } onClick={ handleRefresh }>
              <CloudDownloadIcon />
            </IconButton>
            <IconButton sx={ {color:'white'} } onClick={ handleClose }>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>

      <Divider />
      <DialogContent >
        <Stack direction="column" spacing={ 2 }>
          {
            (charactersError || speciesError || vehiclesError || starshipsError || planetsError) && 
            <Alert severity="error">
              <AlertTitle>API Error</AlertTitle>
              <Box>
                <>
                  An API error occurred:
                  <Box>{ charactersError?.message }</Box>
                  <Box>{ speciesError?.message }</Box>
                  <Box>{ vehiclesError?.message }</Box>
                  <Box>{ starshipsError?.message }</Box>
                  <Box>{ planetsError?.message }</Box>
                </>
              </Box>
            </Alert>
          }
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
        </Stack>
      </DialogContent>
    </>
  );
};

export default NewFilmForm;

export const defaultFormFields: GenericFormFieldObject[] = [
  {
    name: 'title',
    label: 'title',
    placeholder: 'A new hope',
    type: 'text',
    disabled: false,
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'director',
    label: 'director',
    placeholder: 'George Lucas',
    type: 'text',
    disabled: false,
    props: {
      variant: "outlined"
    }
  },
  {
    name: 'characters',
    label: 'characters',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    disabled: false,
    placeholder: 'Luke Skywalker, Han Solo...',
    props: {
      options: [],
      multiple: true,
      disableCloseOnSelect: true,
      ChipProps: {
        color: 'primary'
      },
    }
  },
  {
    name: 'openingCrawl',
    label: 'Opening crawl',
    placeholder: 'In a galaxy far far away...',
    type: 'textarea',
    disabled: false,
  },
  {
    name: 'planets',
    label: 'Select planet',
    type: 'select',
    options: [],
    disabled: false,
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
    disabled: false,
    props: {
      multiple: true,
      disableCloseOnSelect: true,
      ChipProps: {
        color: 'primary'
      },
    }
  },
  {
    name: 'vehicles',
    label: 'Vehicles',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    disabled: false,
    props: {
      multiple: true,
      disableCloseOnSelect: true,
      ChipProps: {
        color: 'primary'
      },
    }
  },
  {
    name: 'starships',
    label: 'starships',
    type: 'autocomplete',
    renderInputProps: {
      variant: 'outlined' 
    },
    disabled: false,
    props: {
      multiple: true,
      disableCloseOnSelect: true,
      ChipProps: {
        color: 'primary'
      },
    }
  },
  {
    name: 'canon',
    label: 'Canon',
    type: 'checkbox',
    disabled: false
  }
];