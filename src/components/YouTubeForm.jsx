import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const YouTubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    channel: Yup.string().required("Channel is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
