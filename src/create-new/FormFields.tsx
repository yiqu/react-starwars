import FormikSelect from "src/shared/form/m-select/FormSelect";

export const getFormFields = (controlObject: any) => {

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
    default: {
      return (
        <></>
      );
    }
  }
};
