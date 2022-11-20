import { TextFieldProps } from '@mui/material';


export interface FormInputProps {
  showLabel?: boolean;
  valueChange: (payload: any) => void;
}

export type FormikInputProps = TextFieldProps & FormInputProps;