import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Divider, Stack } from "@mui/material";
import { PersonalFilm } from "../store/personal-films.state";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import FormInput from "src/shared/form/m-input/FormInput";
import { editFilmValidationSchema } from "src/create-new/schemas/all-schemas";
import { Check, Clear, Remove } from "@mui/icons-material";
import EditRoadIcon from '@mui/icons-material/EditRoad';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export interface EditDialogProps {
  open: boolean;
  film?: PersonalFilm;
  onDialogClose: (update?: Partial<PersonalFilm>) => void;
}

function EditDialog({ open, film, onDialogClose }: EditDialogProps) {

  const handleClose = (event: object, reason: 'escapeKeyDown' | 'backdropClick') => {
    onDialogClose();
  };

  const handleCancel = () => {
    onDialogClose(undefined);
  };
  

  const handleOnSubmit = (values: Partial<PersonalFilm>, helper: FormikHelpers<FilmEdit>) => {
    onDialogClose({
      fireKey: film?.fireKey,
      ...values
    });
  };

  return (
    <Dialog
      disableEscapeKeyDown
      open={ open }
      maxWidth="lg"
      onClose={ handleClose }
    >
      <Formik initialValues={ {
          title: film?.title ?? '',
          director: film?.director ?? '',
        } }
        onSubmit={ handleOnSubmit }
        validationSchema={ editFilmValidationSchema }
        validateOnChange
      >
        <EditForm cancel={ handleCancel } film={ film } />
      </Formik>
    </Dialog>
  );
}

export default EditDialog;

export interface EditFormProps {
  cancel: () => void;
  film?: PersonalFilm;
}

function EditForm({ cancel, film }: EditFormProps) {

  const { values, submitForm, dirty, errors, isValid } = useFormikContext();

  const handleCancelAction = () => {
    cancel();
  };

  return (
    <Form>
      <DialogTitle minWidth={ '30rem' } sx={ {backgroundColor: 'primary.main', color: '#fff'} }>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack>
            <Typography variant="body2">Edit { film?.title } { dirty && '*' }</Typography>
            <Typography variant="caption">By: {film?.director} </Typography>
          </Stack>
          <Stack direction="row" justifyContent="end" alignItems="center">
            { dirty ? (isValid ? <Check color="success" /> : <ErrorOutlineIcon color="error" />) : '' }
          </Stack>
        </Stack>
      </DialogTitle>
      <Divider flexItem variant="fullWidth" />

      <DialogContent>
        <Stack spacing={ 2 } width="100%">
          <FormInput name="title" label="Title" showLabel type="text" />
          <FormInput name="director" label="Director" showLabel type="text" />
        </Stack>
      </DialogContent>
      <Divider flexItem variant="fullWidth" />
      <DialogActions>
        <Button onClick={ handleCancelAction } size="small">Cancel</Button>
        <Button size="small" type="submit" disabled={ !isValid }>Save</Button>
      </DialogActions>
    </Form>
  );
};


export interface FilmEdit {
  title: string;
  director: string;
}

