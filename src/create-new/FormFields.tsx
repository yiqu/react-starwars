import { FormikProps } from "formik";
import FormAutocomplete from "src/shared/form/m-autocomplete/FormAutocomplete";
import FormInput from "src/shared/form/m-input/FormInput";
import FormikSelect from "src/shared/form/m-select/FormSelect";

export const getFormFields = (controlObject: any, formik: FormikProps<NewFilmData>) => {

  switch (controlObject.name) {
    case 'starships': {
      return (
        <>
          <FormikSelect name={ controlObject.name } label={ controlObject.label }
            options={ controlObject.options } { ...controlObject }
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
            { ...controlObject } formik={ formik }
            >
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