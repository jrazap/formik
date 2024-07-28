import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropdownOptions = [
  { key: "Select..", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    dropdownOption: "",
    radioOption: "",
    checkboxOptions: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    description: Yup.string().required("Required"),
    dropdownOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOptions: Yup.array().min(1, "Check one").required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
    console.log("Saved Data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />

          <FormikControl
            control="textarea"
            rows={5}
            name="description"
            label="Description"
          />

          <FormikControl
            control="select"
            options={dropdownOptions}
            name="dropdownOption"
            label="Dropdown Option"
          />

          <FormikControl
            control="radio"
            options={radioOptions}
            name="radioOption"
            label="Radio Option"
          />

          <FormikControl
            control="checkbox"
            options={checkboxOptions}
            name="checkboxOptions"
            label="Checkbox Options"
          />

          <FormikControl control="date" name="birthDate" label="Birth Date" />

          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
