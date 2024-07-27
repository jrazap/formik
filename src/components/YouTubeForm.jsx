import { useFormik } from "formik";
import React from "react";

const YouTubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.channel) {
      errors.channel = "Channel is required";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <form id="youtube-form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            className="form-control"
            id="channel"
            name="channel"
            value={formik.values.channel}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.channel && formik.touched.channel && (
            <div className="text-danger">{formik.errors.channel}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default YouTubeForm;
