export interface DialogProps {
  onClose: (closePayload: any) => void;
  open: boolean;
  initData?: any;
  isEditMode?: boolean;
}