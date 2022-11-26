import { TextFieldProps, SelectProps } from '@mui/material';

export const NONE_SELECTED_VALUE = 'NONE_SELECTED';
export interface FormInputProps {
  name: string;
  label: string;
  showLabel?: boolean;
  helperText?: string;
  valueChange?: (payload: any) => void;
}

export interface FormInput2Props extends FormInputProps {
  props?: TextFieldProps;
}

export interface FormAutocompleteProps extends FormInputProps {
  options : any[];
  props?: any;
}

export interface FormSelectProps extends FormInputProps {
  options?: any[];
  useDefaultNoneSelected?: boolean;
  props?: SelectProps;
}

export type FormikInputProps = TextFieldProps & FormInputProps;

export type FormikSelectProps = SelectProps & FormSelectProps;
