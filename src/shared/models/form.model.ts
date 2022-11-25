import { TextFieldProps, SelectProps } from '@mui/material';


export interface FormInputProps {
  name: string;
  label: string;
  showLabel?: boolean;
  helperText?: string;
  valueChange?: (payload: any) => void;
  
}

export interface FormSelectProps extends FormInputProps {
  options?: any[];
  useDefaultNoneSelected?: boolean;
  props?: SelectProps;
}

export type FormikInputProps = TextFieldProps & FormInputProps;

export type FormikSelectProps = SelectProps & FormSelectProps;
