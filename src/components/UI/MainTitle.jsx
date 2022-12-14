import { Typography } from "@mui/material";
import React from "react";

const MainTitle = () => {
  return (
    <Typography
      component="h1"
      sx={{
        textAlign: "center",
        mt: 8,
        letterSpacing: 2,
        fontSize: 18,
        fontWeight: "bold",
        color: "primary.contrastText",
      }}
    ></Typography>
  );
};

export default MainTitle;
