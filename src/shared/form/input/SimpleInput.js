/* eslint-disable no-unused-vars */
import styles from './SimpleInput.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
 
const FormikTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  return (
    <>

      <label htmlFor={ props.id || props.name }>
        {label}
      </label>

      <input className={ `form-control form-control-sm 
        ${meta.touched && meta.error ? 'error-bg' : ''}` } { ...field } { ...props } />

      { meta.touched && meta.error ? (
        <div className="text-danger form-error">{ meta.error }</div>
      ) : null }

    </>
  );
};

export default FormikTextInput;