import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Divider } from "@mui/material";
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
      <DialogTitle id="confirm-dialog" sx={ {bgcolor: (theme) => theme.palette.mode === 'light' ? 'primary.main' : null, 
        color: (theme) => theme.palette.mode === 'light' ? '#fff' : null} }>
        { title ?? 'Confirmation' }
      </DialogTitle>
      <Divider flexItem variant="fullWidth" />
      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          {message ?? 'Are you sure?'}
        </DialogContentText>
      </DialogContent>
      <Divider flexItem variant="fullWidth" />
      <DialogActions>
        <Button onClick={ onActionClickHandler(false) } variant="outlined">Cancel</Button>
        <Button onClick={ onActionClickHandler(true) } autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}