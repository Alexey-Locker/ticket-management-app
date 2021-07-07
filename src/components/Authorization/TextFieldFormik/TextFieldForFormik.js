import React from "react";
import { useFormikContext } from "formik";
import { TextField } from "@material-ui/core";

export default function TextFieldForFormik(props) {
  const formik = useFormikContext();
  const { name } = props;

  return (
    <TextField
      {...props}
      error={!!formik.errors[name]}
      helperText={formik.errors[name]}
      value={formik.values[name]}
      onInput={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  );
}
