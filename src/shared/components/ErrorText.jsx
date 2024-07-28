import React from "react";

const ErrorText = ({ children }) => {
  return (
    <span className="error-msg text-danger">{children}</span>
  );
};

export default ErrorText;
