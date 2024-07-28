import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorText from './ErrorText'

const Textarea = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <Field as="textarea" id={name} name={name} className="form-control" {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default Textarea