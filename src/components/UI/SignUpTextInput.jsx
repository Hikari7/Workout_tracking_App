import { TextField } from "@mui/material";
import React from "react";

const SignUpTextInput = (props) => {
  return (
    <TextField
      // className={textStyle}
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    ></TextField>
  );
};

export default SignUpTextInput;
