//ShincodeのTimeLineにあたります

import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Post from "./Post";
import PostBox from "./PostBox";

function TimeLine() {
  return (
    <>
      {/* PostHeader */}
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          mt: 8,
          letterSpacing: 2,
          fontSize: 18,
        }}
      >
        Today's activity
      </Typography>
      <PostBox />
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          mt: 10,
          letterSpacing: 2,
          fontSize: 18,
        }}
      >
        Tracking History
      </Typography>
      <Post />
    </>
  );
}

export default TimeLine;
