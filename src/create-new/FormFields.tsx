import FormAutocomplete from "src/shared/form/m-autocomplete/FormAutocomplete";
import FormInput from "src/shared/form/m-input/FormInput";
import FormikSelect from "src/shared/form/m-select/FormSelect";
import { AsyncFormFieldOptions } from "src/shared/models/form.model";

export const getFormFields = (controlObject: any, selectOptions: AsyncFormFieldOptions<any>) => {

  switch (controlObject.name) {
    case 'starships': {
      return (
        <>
          <FormikSelect name={ controlObject.name } label={ controlObject.label }
            options={ selectOptions[controlObject.name]?.options ?? [] } { ...controlObject }
            >
          </FormikSelect>
        </>
      );
    }
    case 'title': {
      return (
        <>
          <FormInput name={ controlObject.name } label={ controlObject.label }
            { ...controlObject }
            >
          </FormInput>
        </>
      );
    }
    case 'director': {
      return (
        <>
          <FormInput name={ controlObject.name } label={ controlObject.label }
            { ...controlObject }
            >
          </FormInput>
        </>
      );
    }
    case 'characters': {
      return (
        <>
          <FormAutocomplete name={ controlObject.name } label={ controlObject.label }
            options={ selectOptions[controlObject.name]?.options ?? [] } 
            loading={ selectOptions[controlObject.name]?.loading } 
            { ...controlObject } >
          </FormAutocomplete>
        </>
      );
    }
    default: {
      return (
        <></>
      );
    }
  }
};


export interface NewFilmData {
  title: string;
  director: string;
  characters: string[];
  starships: string;
  opening_crawl: string;
  planets: string[];
  species: string[];
  vehicles: string[];
}