import { TextFieldProps, SelectProps } from '@mui/material';

export const NONE_SELECTED_VALUE = 'NONE_SELECTED';
export interface FormInputProps {
  name: string;
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  helperText?: string;
  placeholder?: string;
  type: string;
  validate?: (value: any) => string | null;
  valueChange?: (payload: any) => void;
}

export interface FormInput2Props extends FormInputProps {
  props?: TextFieldProps;
}

export interface FormAutocompleteProps extends FormInputProps {
  options: any[];
  props?: any;
  dataLoading?: boolean;
  renderInputProps?: any;
}

export interface FormSelectProps extends FormInputProps {
  options?: any[];
  useDefaultNoneSelected?: boolean | string;
  props?: SelectProps;
}

export type FormikInputProps = TextFieldProps & FormInputProps;

export type FormikSelectProps = SelectProps & FormSelectProps;

export type GenericFormFieldObject = FormInput2Props | FormAutocompleteProps | FormSelectProps;

export interface AsyncFormFieldOptions<T> {
  [key: string]: {
    options:  T[] | undefined,
    loading?: boolean
  }
}

export interface FormFieldOptions<T> {
  [key: string]: {
    options:  T[] | undefined,
  }
}