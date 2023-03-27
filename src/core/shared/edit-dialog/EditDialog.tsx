import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Alert, AlertTitle, Stack } from "@mui/material";

export interface EditDialogProps {
  editable: any;
  open: boolean;
  title: string;
  apiLoading?: boolean;
  hasErrorMsg?: string;
  onDialogClose: (editedData?: any) => void;
}

function EditDialog({ editable, onDialogClose, open, title, apiLoading, hasErrorMsg }: EditDialogProps) {


  const onSubmitHandler = () => {
    onDialogClose(editable);
  };

  const onCancelHandler = () => {
    onDialogClose(undefined);
  };

  const onCloseHandler = (event: object, reason: string) => {
    if (reason === 'backdropClick') {
      onCancelHandler();
    }
  };

  return (
    <Dialog onClose={ onCloseHandler } open={ open } 
      fullWidth 
      id="edit-dialog"
      maxWidth={ "sm" }>
      <DialogTitle>
        { hasErrorMsg && <Stack width="100%" pb={ 2 }>
          <Alert severity="error" sx={ {borderRadius: '20px'} }>
            <AlertTitle>Error</AlertTitle>
            { hasErrorMsg }
          </Alert>
        </Stack> }
        { title}
      </DialogTitle>
      
      <DialogContent>
        Mock Edit...
      </DialogContent>
      <DialogActions >
        <Button onClick={ onCancelHandler }>Cancel</Button>
        <Button onClick={ onSubmitHandler }>{ apiLoading ? 'Working...' : 'Submit' } </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;