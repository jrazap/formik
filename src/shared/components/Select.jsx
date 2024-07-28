import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className="form-select"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Select;
