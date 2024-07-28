import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <Field id={name} name={name} className="form-control" {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Input;
