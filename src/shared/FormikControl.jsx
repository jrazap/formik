import React from "react";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Select from "./components/Select";
import RadioButtons from "./components/RadioButtons";
import CheckboxGroup from "./components/CheckboxGroup";
import DatePicker from "./components/DatePicker";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <Textarea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButtons {...rest} />;

    case "checkbox":
      return <CheckboxGroup {...rest} />;

    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
