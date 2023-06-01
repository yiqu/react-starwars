import { Dialog, DialogActions, Button, DialogTitle, IconButton, Stack, Divider, DialogContent } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloseIcon from '@mui/icons-material/Close';
import { Refresh } from "@mui/icons-material";
import { Form, Formik, useFormikContext } from "formik";

export interface NewPersonalFilmDialogProps {
  open?: boolean;
  onDialogClose: () => void;
}

function NewPersonalFilmDialog({ open, onDialogClose }: NewPersonalFilmDialogProps) {

  const handleDialogClose = (event: object, reason: string) => {
    onDialogClose();
  };

  const handleRefreshData = () => {
    
  };
  
  const handleOnSubmit = () => {
    
  };

  return (
    <Dialog onClose={ handleDialogClose } open={ !!open } maxWidth="lg">
      <DialogTitle minWidth={ '30rem' } sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? 'primary.main' : null, 
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

  console.log(values);

  const handleReset = () => {
    
  };

  const handleSave = () => {
    
  };

  return (
    <Form>
      <DialogContent>

        Form
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