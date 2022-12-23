import React from 'react';
import FormAutocomplete from "src/shared/form/m-autocomplete/FormAutocomplete";
import FormInput from "src/shared/form/m-input/FormInput";
import FormikSelect from "src/shared/form/m-select/FormSelect";

export const CreateFormFields = (controlObject: any) => {
  switch (controlObject.type) {
    case 'select': {
      return (
        <>
          <FormikSelect name={ controlObject.name } label={ controlObject.label }
            options={ controlObject.options ?? [] } { ...controlObject }
            >
          </FormikSelect>
        </>
      );
    }
    case 'text': {
      return (
        <>
          <FormInput name={ controlObject.name } label={ controlObject.label }
            { ...controlObject }
            >
          </FormInput>
        </>
      );
    }
    case 'autocomplete': {
      return (
        <>
          <FormAutocomplete name={ controlObject.name } label={ controlObject.label }
            options={ controlObject.options ?? [] }
            loading={ controlObject.loading } 
            { ...controlObject } >
          </FormAutocomplete>
        </>
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
  opening_crawl: string;
  planets: string[];
  species: string[];
  vehicles: string[];
}