import React from 'react';
import FormAutocomplete from "src/shared/form/m-autocomplete/FormAutocomplete";
import FormInput from "src/shared/form/m-input/FormInput";
import FormikSelect from "src/shared/form/m-select/FormSelect";
import FormTextArea from 'src/shared/form/m-textarea/FormTextArea';

export const CreateFormFields = (controlObject: any) => {
  switch (controlObject.type) {
    case 'select': {
      return (
        <FormikSelect name={ controlObject.name } 
          label={ controlObject.label }
          options={ controlObject.options ?? [] } 
          { ...controlObject }
        />
      );
    }
    case 'text': {
      return (
        <FormInput name={ controlObject.name } 
          label={ controlObject.label }
          { ...controlObject }
        />
      );
    }
    case 'autocomplete': {
      return (
        <FormAutocomplete name={ controlObject.name } 
          label={ controlObject.label }
          options={ controlObject.props.options ?? [] }
          dataLoading={ controlObject.props.loading } 
          { ...controlObject } />
      );
    }
    case 'textarea': {
      return (
        <FormTextArea name={ controlObject.name } 
          label={ controlObject.label }
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


export interface NewFilmData {
  title: string;
  director: string;
  characters: string[];
  starships: string[];
  openingCrawl: string;
  planets: string;
  species: string[];
  vehicles: string[];
}