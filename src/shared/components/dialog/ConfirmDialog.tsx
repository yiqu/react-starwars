import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { BaseSyntheticEvent } from "react";

export interface ConfirmDialogProps {
  open?: boolean;
  handleClose: (choice: boolean) => void;
  title?: string;
  message?: string;
}

export default function ConfirmDialog({ open, handleClose, title, message }: ConfirmDialogProps) {

  const onCloseHandler = (event: object, reason: string) => {
    handleClose(false);
  };

  const onActionClickHandler = (action: boolean) => (e: BaseSyntheticEvent) => {
    handleClose(action);
  };

  return (
    <Dialog
      open={ !!open }
      onClose={ onCloseHandler }
    >
      <DialogTitle id="confirm-dialog"  mb={ 2 } sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? 'primary.light' : null, 
        color: (theme) => theme.palette.mode === 'light' ? '#fff' : null} }>
        { title ?? 'Confirmation' }
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          {message ?? 'Are you sure?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ onActionClickHandler(false) } sx={ { color: 'gray'} }>Cancel</Button>
        <Button onClick={ onActionClickHandler(true) } autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}