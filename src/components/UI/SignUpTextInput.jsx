import { TextField } from "@mui/material";
import React from "react";

const SignUpTextInput = (props) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      sx={{ width: { sm: "40%" }, display: "block", mx: "auto", mt: 2 }}
    ></TextField>
  );
};

export default SignUpTextInput;
