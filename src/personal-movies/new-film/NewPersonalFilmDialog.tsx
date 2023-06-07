import { Dialog, DialogActions, Button, DialogTitle, IconButton, Stack, Divider, DialogContent, FormControl, InputLabel, Select, 
  OutlinedInput, Box, Chip, SelectChangeEvent, Typography, Checkbox, ListItemText, TextField, FormHelperText } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloseIcon from '@mui/icons-material/Close';
import { Refresh } from "@mui/icons-material";
import { ErrorMessage, Field, FieldInputProps, FieldMetaProps, Form, Formik, FormikContextType, useFormikContext } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFetchCharactersInfiniteQuery } from "src/core/store/sw-entities-config/swapi";
import { useAppDispatch, useAppSelector } from "src/store/appHook";
import { selectFetchPageUrl, selectNextPageUrl } from "src/core/store/entities/entities.selectors";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { dispatchPaging } from "src/core/store/entities/entities.reducer";
import { useFetchEntitiesInfiniteQuery, useLazyFetchEntitiesInfiniteQuery } from "src/core/store/entities/entities.api";
import { EntityType } from "src/core/store/entities/entities.state";
import { StarwarsContent } from "src/shared/models/starwars.model";
import ProgressCircle from "src/shared/components/progress/CircleProgress";
import { getFilledIcon } from "src/shared/utils/left-nav.utils";
import FormInput from "src/shared/form/m-input/FormInput";
import moment from "moment";
import FormTextArea from "src/shared/form/m-textarea/FormTextArea";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormDatepicker from "src/shared/form/m-datepicker/FormDatepicker";
import { upperFirst } from "lodash";
import { FormikFieldArgs } from "src/shared/models/form.model";
import { newPersonalFilmValidationSchema } from "src/create-new/schemas/all-schemas";

export interface NewPersonalFilmDialogProps {
  open?: boolean;
  onDialogClose: () => void;
}

function NewPersonalFilmDialog({ open, onDialogClose }: NewPersonalFilmDialogProps) {

  const handleDialogClose = (event: object, reason: string) => {
    if (reason !== 'backdropClick') {
      onDialogClose();
    }
  };

  const handleRefreshData = () => {
    
  };
  
  const handleOnSubmit = () => {
    
  };

  return (
    <Dialog onClose={ handleDialogClose } open={ !!open } maxWidth="md" PaperProps={ {sx: {overflowX: 'hidden'}} }>
      <DialogTitle minWidth={ '900px' } sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? 'primary.main' : null, 
          color: (theme) => theme.palette.mode === 'light' ? '#fff' : null} }>
        <Stack direction={ 'row' } justifyContent="space-between" alignItems="center">
          <Stack direction="row" justifyContent="start" alignItems="center">
            { 'Add New Film' }
          </Stack>
          <Stack direction="row" justifyContent="end" alignItems="center">
            <IconButton onClick={ handleRefreshData } color="inherit">
              <Refresh />
            </IconButton>
            <IconButton onClick={ onDialogClose }  color="inherit">
              <CloseIcon />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>
      <Divider flexItem variant="fullWidth" />

      <Formik initialValues={ initValue }
        onSubmit={ handleOnSubmit }
        validationSchema={ newPersonalFilmValidationSchema }
        validateOnChange
      >
        <NewFilmForm />
      </Formik>
      
    </Dialog>
  );
}

export default NewPersonalFilmDialog;


function NewFilmForm() {

  const { values, submitForm, dirty, errors, isValid, setValues, setFieldValue } = useFormikContext();
 console.log('----VALUES: ',values);

  const handleReset = () => {
  };

  const handleSave = () => {
  };

  const handleOnValueChange = useCallback((entity: string, val: StarwarsContent[]) => {
    setFieldValue(entity.toLowerCase(), val);
  }, [setFieldValue]);

  return (
    <Form>
      <DialogContent>
        <Stack direction="column" justifyContent="start" alignItems="center" width="100%">
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormInput name="title" label="Title" showLabel type="text" variant="outlined" props={ {size: 'medium'} } />
          </InputWithLeftLabel>
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormInput name="director" label="Director" showLabel type="text" variant="outlined" props={ {size: 'medium'} } />
          </InputWithLeftLabel>
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormInput name="producer" label="Producer" showLabel type="text" variant="outlined" props={ {size: 'medium'} } />
          </InputWithLeftLabel>
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormInput name="episode_id" label="Episode" showLabel type="number" variant="outlined" props={ {size: 'medium'} }/>
          </InputWithLeftLabel>
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormTextArea name="opening_crawl" label="Opening Text" showLabel type="text" variant="outlined" props={ {size: 'medium'} }/>
          </InputWithLeftLabel>
          <InputWithLeftLabel leftContent={ <div></div> }>
            <FormDatepicker label="Release Date" name="release_date" props={ {disableFuture: false} } />
          </InputWithLeftLabel>

        </Stack>
        
        <Stack direction="column" justifyContent="start" alignItems="center" width="100%">
          <Field name="planets">
            {({
               field, // { name, value, onChange, onBlur }
               form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
            }: FormikFieldArgs<StarwarsContent[]>) => {
              return <RemoteSelect entityId="Planets" fields={ field } form={ form } meta={ meta } onValueChange={ handleOnValueChange } />;
             }}
          </Field>
          <Field name="characters">
            {({field,  form, meta }: FormikFieldArgs<StarwarsContent[]>) => {
              return <RemoteSelect entityId="Characters" fields={ field } form={ form } meta={ meta } onValueChange={ handleOnValueChange } />;
            }}
          </Field>
          <Field name="vehicles">
            {({field,  form, meta }: FormikFieldArgs<StarwarsContent[]>) => {
              return <RemoteSelect entityId="Vehicles" fields={ field } form={ form } meta={ meta } onValueChange={ handleOnValueChange } />;
            }}
          </Field>
          <Field name="starships">
            {({field,  form, meta }: FormikFieldArgs<StarwarsContent[]>) => {
              return <RemoteSelect entityId="Starships" fields={ field } form={ form } meta={ meta } onValueChange={ handleOnValueChange } />;
            }}
          </Field>
          <Field name="species">
            {({field,  form, meta }: FormikFieldArgs<StarwarsContent[]>) => {
              return <RemoteSelect entityId="Species" fields={ field } form={ form } meta={ meta } onValueChange={ handleOnValueChange } />;
            }}
          </Field>
        </Stack>

      </DialogContent>
        
      <Divider flexItem variant="fullWidth" />
      <DialogActions>
        <Button variant="text" startIcon={ <RestartAltIcon /> } onClick={ handleReset }>
          Reset
        </Button>
        <Button variant="text" startIcon={ <SaveIcon /> } onClick={ handleSave } disabled={ !isValid }>
          Save
        </Button>
      </DialogActions>
    </Form>
  );
}

export const DEFAULT_NEW_FORM_VALUE = {
  title: 'My Starwars Film',
  director: 'Kevin'
};

export interface RemoteSelectProps {
  entityId: EntityType;
  fields: FieldInputProps<StarwarsContent[]>; // formik use
  form: FormikContextType<StarwarsContent[]>; // formik use
  meta: FieldMetaProps<StarwarsContent[]>; // formik use
  onValueChange?: (entityId: string, value: StarwarsContent[]) => void; // pass up for formik to set values
}

function RemoteSelect({ entityId, fields, form, meta, onValueChange }: RemoteSelectProps) {
  const entityId2 = (entityId === 'Characters' ? 'People' : entityId); // swap it to People if Characters is used
  const dispatch = useAppDispatch();
  const [ selectedEntities, setSelectedEntities ]  = useState<StarwarsContent[]>([]);

  const fetchUrl: string | undefined = useAppSelector(selectFetchPageUrl(entityId2));
  const nextPage: string | null | undefined = useAppSelector(selectNextPageUrl(entityId2));
  const { data, isLoading, isFetching }= useFetchEntitiesInfiniteQuery({entityId: entityId2, url: fetchUrl});

  const selectedObject = useRef({} as {[uid: string]: boolean}); // used to highlight selections

  const onPageHandler = () => {
    dispatch(dispatchPaging({entityId: (entityId2), pagination: { page: -1, fetchUrl: nextPage }}));
  };

  /**
   * Using a wrapper (infinite scroll) div will not trigger default Select's onChange. So we have to
   * manually calculate select and de-select
   * 
   * @param content 
   * @returns 
   */
  const handleOptionClick = (content: StarwarsContent) => (event: any) => {
    const isAlreadySelected: boolean = !!selectedObject.current[content.uid];

    selectedObject.current[`${content.uid}`] = (isAlreadySelected ? false : true);
    setSelectedEntities((current) => {
      if (isAlreadySelected) {
        const dup = [...current];
        const indexToRemove = current.findIndex((c) => c.uid === content.uid) ?? -1;
        if (indexToRemove > -1) {
          dup.splice(indexToRemove, 1);
        }
        return [...dup];
      }
      return [...current, content];
    });
  };

  useEffect(() => {
    onValueChange && onValueChange(entityId, selectedEntities);
  }, [selectedEntities, onValueChange, entityId]);

  const leftContent = (
    <>
      <Box>
        { getFilledIcon(entityId.toLowerCase()) }
      </Box>
      <Typography variant="h6">{ entityId } {selectedEntities.length > 0 ? `(${selectedEntities.length})` : ''}</Typography>
    </>
  );

  return (
    <InputWithLeftLabel leftContent={ leftContent }>
      <FormControl sx={ { width: '100%' } }>
        <InputLabel> { entityId } </InputLabel>
        <Select
          multiple
          // value={ selectedEntities } // Get it from formik init values
          input={ <OutlinedInput label={ entityId } /> }
          renderValue={ (selected: StarwarsContent[]) => {
            return (
              <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
                {
                  selected.map((value: StarwarsContent) => (
                    <Chip key={ value.uid } label={ value.name } color="info" size="small" sx={ {height: '20px'} } />
                  ))
                }
              </Box>
            );
          } }
          MenuProps={ {
            PaperProps: {
              style: {
                maxHeight: 300 // limit height to trigger scrollable
              },
              id: 'menuParentDiv' // set the div for infinite scroll
            }
          } }
          { ...fields }
        >
          {
            isLoading ? <MenuItem disabled><ProgressCircle size={ 15 } styleProps={ {marginRight: 2} } /><em>Loading { entityId }...</em></MenuItem> : (
              <InfiniteScroll
                dataLength={ data?.results.length ?? 0 }
                next={ onPageHandler }
                hasMore={ !!nextPage }
                loader={ <MenuItem disabled><ProgressCircle size={ 15 } styleProps={ {marginRight: 2} } /><em>Loading more { entityId }...</em></MenuItem> }
                endMessage={ <MenuItem disabled><em>End of { entityId }</em></MenuItem> }
                className="scroller-parent"
                scrollableTarget="menuParentDiv">
                { 
                  data?.results.map((content: StarwarsContent) => (
                    <MenuItem key={ content.uid }  onClick={ handleOptionClick(content) } selected={ selectedObject.current[content.uid] === true }>
                      <Checkbox checked={ selectedObject.current[content.uid] === true } />
                      <ListItemText primary={ content.name } />
                    </MenuItem>
                  )) 
                }
              </InfiniteScroll>
            )
          }
        </Select>

        <FormHelperText id={ `${fields?.name}-helper-text` } error={  meta.touched && !!meta.error } sx={ {ml: 0} } >
          {
            (meta.touched && meta.error) ? 
              (<ErrorMessage name={ fields?.name } render={ (err) => upperFirst(err) } />) : (<>{''}</>)
          }
        </FormHelperText>

      </FormControl>
    </InputWithLeftLabel>
  );
}

export interface IPersonalFilm {
  title: string;
  director: string;
  producer: string;
  episode_id: number;
  release_date: moment.Moment;
  opening_crawl: string;
  characters: StarwarsContent[];
  starships: StarwarsContent[];
  planets: StarwarsContent[];
  species: StarwarsContent[];
  vehicles: StarwarsContent[];
  canon: boolean;
  url?: string;
}

const initValue: IPersonalFilm = {
  title: 'My Starwars Film',
  director: 'Kevin',
  producer: '',
  characters: [],
  starships: [],
  opening_crawl: 'In a galaxy far far away...',
  planets: [],
  species: [],
  vehicles: [],
  episode_id: 10,
  release_date: moment(),
  canon: false
};

function InputWithLeftLabel({ leftContent, children }: any) {
  return (
    <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 2 } mb={ 2 }>
      <Box flexBasis="14%">
        { leftContent }
      </Box>
      { children }
    </Stack>
  );
}