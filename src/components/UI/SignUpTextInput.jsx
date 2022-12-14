import { styled, TextField } from "@mui/material";
import React from "react";

// const useStyles = styled({
//   full: {
//     marginBottom: 16,
//   },
//   half: {
//     marginLeft: 8,
//     marginRight: 8,
//     marginBottom: 16,
//     minWidth: 130,
//     width: "calc(50% - 16px)",
//   },
// });

const SignUpTextInput = (props) => {
  // const classes = useStyles();
  // const textStyle = props.fullWidth ? classes.full : classes.half;
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
