import React from 'react';
import FormAutocomplete from "src/shared/form/m-autocomplete/FormAutocomplete";
import FormCheckbox from 'src/shared/form/m-checkbox/FormCheckbox';
import FormInput from "src/shared/form/m-input/FormInput";
import FormikSelect from "src/shared/form/m-select/FormSelect";
import FormTextArea from 'src/shared/form/m-textarea/FormTextArea';

export const CreateFormFields = (controlObject: any) => {
  switch (controlObject.type) {
    case 'select': {
      return (
        <FormikSelect 
          name={ controlObject.name } 
          label={ controlObject.label }
          options={ controlObject.options ?? [] } 
          disabled={ controlObject.disabled }
          placeholder={ controlObject.placeholder }
          { ...controlObject }
        />
      );
    }
    case 'text': {
      return (
        <FormInput 
          name={ controlObject.name } 
          label={ controlObject.label }
          disabled={ controlObject.disabled }
          placeholder={ controlObject.placeholder }
          { ...controlObject }
        />
      );
    }
    case 'autocomplete': {
      return (
        <FormAutocomplete 
          name={ controlObject.name } 
          label={ controlObject.label }
          options={ controlObject.props.options ?? [] }
          dataLoading={ controlObject.props.loading } 
          disabled={ controlObject.disabled }
          placeholder={ controlObject.placeholder }
          { ...controlObject } />
      );
    }
    case 'textarea': {
      return (
        <FormTextArea 
          name={ controlObject.name } 
          label={ controlObject.label }
          disabled={ controlObject.disabled }
          placeholder={ controlObject.placeholder }
          { ...controlObject } />
      );
    }
    case 'checkbox': {
      return (
        <FormCheckbox 
          name={ controlObject.name }
          label={ controlObject.label }
          disabled={ controlObject.disabled }
          { ...controlObject } />
      );
    }
    default: {
      return (
        <> No component matched... </>
      );
    }
  }
};