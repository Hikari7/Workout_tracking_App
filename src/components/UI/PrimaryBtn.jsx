import { Button } from "@mui/material";
import React from "react";

const PrimaryBtn = (props) => {
  return (
    <Button
      onClick={() => props.onClick()}
      variant="contained"
      sx={{
        display: "block",
        my: 4,
        ml: "auto",
        textTransform: "none",
      }}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryBtn;
