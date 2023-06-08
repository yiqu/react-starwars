import { Dialog, DialogActions, Button, DialogTitle, IconButton, Stack, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Refresh } from "@mui/icons-material";
import moment from "moment";
import { newPersonalFilmValidationSchema } from "src/create-new/schemas/all-schemas";
import NewFilmForm, { IPersonalFilm } from "./NewPersonalFilmForm";
import { Formik, FormikHelpers } from "formik";
import { useCreatePersonalFilmMutation } from "../store/personal-films.api";
import { FirebasePostPayload } from "src/shared/models/firebase.model";

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

export interface NewPersonalFilmDialogProps {
  open?: boolean;
  onDialogClose: () => void;
}

function NewPersonalFilmDialog({ open, onDialogClose }: NewPersonalFilmDialogProps) {

  const [createFilm, createFilmResult] = useCreatePersonalFilmMutation();
  
  const handleDialogClose = (event: object, reason: string) => {
    if (reason !== 'backdropClick') {
      onDialogClose();
    }
  };

  const handleRefreshData = () => {
    
  };
  
  const handleOnSubmit = (value: IPersonalFilm, formikHelpers: FormikHelpers<IPersonalFilm>) => {
    formikHelpers.setSubmitting(true);
    const create$ = createFilm(value).unwrap();
    create$.then((res: FirebasePostPayload) => {
      onDialogClose();
    }).catch((err) => {
    }).finally(() => formikHelpers.setSubmitting(false));
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


