import { Dialog, DialogActions, Button, DialogTitle, IconButton, Stack, Divider, DialogContent, FormControl, InputLabel, Select, 
  OutlinedInput, Box, Chip, SelectChangeEvent, Typography, Checkbox, ListItemText } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloseIcon from '@mui/icons-material/Close';
import { Refresh } from "@mui/icons-material";
import { Form, Formik, useFormikContext } from "formik";
import { useRef, useState } from "react";
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
    <Dialog onClose={ handleDialogClose } open={ !!open } maxWidth="md">
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

      <Formik initialValues={ DEFAULT_NEW_FORM_VALUE }
        onSubmit={ handleOnSubmit }
        validateOnChange
      >
        <NewFilmForm />
      </Formik>
      
    </Dialog>
  );
}

export default NewPersonalFilmDialog;


function NewFilmForm() {

  const { values, submitForm, dirty, errors, isValid } = useFormikContext();
  

  const handleReset = () => {
  };

  const handleSave = () => {
  };

  return (
    <Form>
      <DialogContent>
        <Stack direction="column" justifyContent="start" alignItems="center" width="100%">
          <RemoteSelect entityId="People" />
          <RemoteSelect entityId="Planets" />
          <RemoteSelect entityId="Vehicles" />
          <RemoteSelect entityId="Starships" />
          <RemoteSelect entityId="Species" />
        </Stack>
      </DialogContent>
        
      <Divider flexItem variant="fullWidth" />
      <DialogActions>
        <Button variant="text" startIcon={ <RestartAltIcon /> } onClick={ handleReset }>
          Reset
        </Button>
        <Button variant="text" startIcon={ <SaveIcon /> } onClick={ handleSave }>
          Save
        </Button>
      </DialogActions>
    </Form>
  );
}

export const DEFAULT_NEW_FORM_VALUE = {
  title: ''
};

export interface RemoteSelectProps {
  entityId: EntityType;
}

function RemoteSelect({ entityId }: RemoteSelectProps) {
  const dispatch = useAppDispatch();
  const [ selectedEntities, setSelectedEntities ]  = useState<StarwarsContent[]>([]);

  const fetchUrl: string | undefined = useAppSelector(selectFetchPageUrl(entityId));
  const nextPage: string | null | undefined = useAppSelector(selectNextPageUrl(entityId));
  const { data, isLoading, isFetching }= useFetchEntitiesInfiniteQuery({entityId, url: fetchUrl});

  const selectedObject = useRef({} as {[uid: string]: boolean}); // used to highlight selections

  const onPageHandler = () => {
    dispatch(dispatchPaging({entityId: entityId, pagination: { page: -1, fetchUrl: nextPage }}));
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


  return (
    <Stack direction="row" justifyContent="start" alignItems="center" width="100%" spacing={ 2 } mb={ 2 }>
      <Box flexBasis="20%">
        <Box>
          { getFilledIcon(entityId.toLowerCase()) }
        </Box>
        <Typography variant="h6">{ entityId } {selectedEntities.length > 0 ? `(${selectedEntities.length})` : ''}</Typography>
      </Box>
      <FormControl sx={ { width: '100%' } }>
        <InputLabel> { entityId } </InputLabel>
        <Select
          multiple
          value={ selectedEntities }
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
      </FormControl>
      <Box width={ 30 }>
        { isFetching && <ProgressCircle size={ 15 } /> }
      </Box>
    </Stack>
  );
}