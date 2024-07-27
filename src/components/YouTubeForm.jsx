import React from "react";
import {
  Formik,
  Form,
  Field,
  FastField,
  FieldArray,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";

const YouTubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment: "",
    address: "",
    social: {
      twitter: "",
      facebook: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  const validateComment = (value) => {
    let error;
    if (!value) {
      error = "Comment is required";
    }
    if (value.length < 10) {
      error = "Comment should be at least 10 characters long";
    }
    return error;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    channel: Yup.string().required("Channel is required"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Values", values);
    console.log("Submit Props", onSubmitProps);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        return (
          <Form id="youtube-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              <ErrorMessage name="name" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                className="form-control"
                id="channel"
                name="channel"
              />
              <ErrorMessage name="channel" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <Field
                type="text"
                className="form-control"
                id="comment"
                name="comment"
                as="textarea"
                validate={validateComment}
              />
              <ErrorMessage name="comment">
                {(errorMessage) => (
                  <span className="text-danger">{errorMessage}</span>
                )}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <FastField className="form-control" name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("Address Field Rendered");
                  return (
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <span className="text-danger">{meta.error}</span>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-group">
              <label htmlFor="facebook">Facebook</label>
              <Field
                type="text"
                className="form-control"
                id="facebook"
                name="social.facebook"
              />
              <ErrorMessage name="social.facebook" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="twitter">Twitter</label>
              <Field
                type="text"
                className="form-control"
                id="twitter"
                name="social.twitter"
              />
              <ErrorMessage name="social.twitter" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="primaryPhone">Primary Phone</label>
              <Field
                type="text"
                className="form-control"
                id="primaryPhone"
                name="phoneNumbers[0]"
              />
              <ErrorMessage name="primaryPhone[0]" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="secondaryPhone">Secondary Phone</label>
              <Field
                type="text"
                className="form-control"
                id="secondaryPhone"
                name="phoneNumbers[1]"
              />
              <ErrorMessage name="secondaryPhone[1]" component={ErrorText} />
            </div>

            <div className="form-group">
              <label htmlFor="phNumbers">Phone Numbers List</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phone, index) => {
                        return (
                          <div key={index} className="row mb-1">
                            <div className="col-10">
                              <Field
                                name={`phNumbers[${index}]`}
                                className="form-control"
                              />
                            </div>
                            <div className="col-2">
                              <div className="btns d-flex gap-2">
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => push(index)}
                                >
                                  +
                                </button>
                                {index > 0 && (
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              <ErrorMessage name="phNumbers" component={ErrorText} />
            </div>

            <div className="form-group">
              <div className="row gap-1">
                <button
                  type="button"
                  className="btn btn-warning w-auto"
                  onClick={() => {
                    formik.validateField("comment");
                  }}
                >
                  Validate Comments
                </button>
                <button
                  type="button"
                  className="btn btn-dark w-auto"
                  onClick={() => {
                    formik.validateForm();
                  }}
                >
                  Validate All
                </button>
                <button
                  type="button"
                  className="btn btn-warning w-auto"
                  onClick={() => {
                    formik.setFieldTouched("comment");
                  }}
                >
                  Visit Comments
                </button>
                <button
                  type="button"
                  className="btn btn-dark w-auto"
                  onClick={() => {
                    formik.setTouched({
                      name: true,
                      email: true,
                      channel: true,
                      comment: true,
                    });
                  }}
                >
                  Visit All
                </button>
                <button
                  type="button"
                  className="btn btn-primary w-auto"
                  disabled={!formik.isValid || formik.isSubmitting}
                  onClick={() => {
                    formik.submitForm();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YouTubeForm;
