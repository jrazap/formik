import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <div className="form-check" key={option.key}>
              <input
                type="radio"
                className="form-check-input"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default RadioButtons;
