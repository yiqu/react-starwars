import { TextFieldProps, SelectProps } from '@mui/material';
import { DatePickerProps } from '@mui/x-date-pickers';
import { FieldInputProps, FormikContextType, FieldMetaProps } from 'formik';
import { Moment } from 'moment';


export const NONE_SELECTED_VALUE = 'NONE_SELECTED';
export interface FormInputProps {
  name: string;
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  helperText?: string;
  placeholder?: string;
  type?: string;
  variant?: string;
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
export interface FormDatepickerProps extends FormInputProps {
  props?: DatePickerProps<Moment>;
}

export interface FormCustomComponentrProps extends FormInputProps {
  customComponent: any;
  props?: any;
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

export interface FormikFieldArgs<T> {
  field: FieldInputProps<T>;
  form: FormikContextType<T>;
  meta: FieldMetaProps<T>;
}