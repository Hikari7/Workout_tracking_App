//ShincodeのTimeLineにあたります

import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";

function Posts() {
  console.log("sss");
  return (
    <>
      {/* PostHeader */}
      <Container>
        <Box
          sx={{
            width: "60%",
            height: "auto",
            justifyContent: "spaceBetween",
            mx: "auto",
            mt: 4,
            //   backgroundColor: "primary.dark",
            //   "&:hover": {
            //     backgroundColor: "primary.main",
            //     opacity: [0.9, 0.8, 0.7],
            //   },
          }}
        >
          <Typography component="h3" sx={{ textAlign: "center" }}>
            Record your progress
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Record your progress"
            multiline
            rows={5}
            rowsmax={10}
            sx={{
              justifyContent: "center",
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>
      </Container>
      {/* PostBox */}
      {/* Post */}
    </>
  );
}

export default Posts;
