import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { PersonalFilm } from "../store/personal-films.state";

export interface EditDialogProps {
  open: boolean;
  film?: PersonalFilm;
  onDialogClose: (update?: PersonalFilm) => void;
}

function EditDialog({ open, film, onDialogClose }: EditDialogProps) {

  const handleClose = (event: object, reason: 'escapeKeyDown' | 'backdropClick') => {
  
  };

  const handleSaveAction = () => {
    
  };

  const handleCancelAction = () => {
    onDialogClose(undefined);
  };

  return (
    <Dialog
      disableEscapeKeyDown
      open={ open }
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleCancelAction }>Cancel</Button>
        <Button onClick={ handleSaveAction } >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;