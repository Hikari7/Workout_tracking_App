//ShincodeのTimeLineにあたります

import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import PostBox from "./PostBox";

function TimeLine() {
  return (
    <>
      {/* PostHeader */}
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          margin: 3,
          letterSpacing: 2,
          fontSize: 18,
        }}
      >
        Today's activity
      </Typography>
      {/* PostBox */}
      <PostBox />

      {/* Post */}
    </>
  );
}

export default TimeLine;
