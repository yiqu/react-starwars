/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogProps } from 'src/shared/models/dialog.model';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Checkbox, Divider, IconButton, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useEffect, useState } from 'react';
 import { Form, Formik, useFormikContext } from 'formik';
import { getFormFields } from '../FormFields';
import { StarwarsPeople } from 'src/shared/models/starwars.model';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const NewFilmForm = (props: any) => {

  const formikContext = useFormikContext();

  useEffect(() => {
    console.log(formikContext.values);
  }, [formikContext.values]);

  const [formFields, setFormFields] = useState<any[]>([]);

  useEffect(() => {
    setFormFields(defaultFormFields);
  }, []);

  return (
    <Form>
      { formFields.map((field) => {
        return (
          <Grid key={ field.name } xs={ 6 }>
            { getFormFields(field, props.formik) }
          </Grid>
        );
      }) }
    </Form>
  );
};

export default NewFilmForm;

export const defaultFormFields = [
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
      options: [
        {
          "uid": "1",
          "name": "Luke Skywalker",
          "url": "https://www.swapi.tech/api/people/1"
        },
        {
          "uid": "2",
          "name": "C-3PO",
          "url": "https://www.swapi.tech/api/people/2"
        },
        {
          "uid": "3",
          "name": "R2-D2",
          "url": "https://www.swapi.tech/api/people/3"
        },
        {
          "uid": "4",
          "name": "Darth Vader",
          "url": "https://www.swapi.tech/api/people/4"
        }
      ],
      multiple: true,
      disableCloseOnSelect: true,
      getOptionLabel: (option: StarwarsPeople) => option.name,
      renderOption: (props: any, option: StarwarsPeople, { selected }: {selected: boolean}) => { return (
        <li { ...props }>
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
        <TextField { ...params } label="Characters" placeholder="Characters" />
      ),
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
    options: [
      {
        display: 'ONE',
        value: '1'
      }
    ],
    useDefaultNoneSelected: 'your starships',
    props: {
      variant: "outlined",
      size: 'small'
    }
  }
];