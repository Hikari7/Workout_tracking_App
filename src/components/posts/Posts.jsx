//ShincodeのTimeLineにあたります

import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";

function Posts() {
  return (
    <>
      {/* PostHeader */}
      <Container>
        <Typography component="h3" sx={{ textAlign: "center", margin: 3 }}>
          Record your progress
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "auto",
            mx: "auto",
            mt: 4,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Record your progress"
            multiline
            rows={5}
            rowsmax={10}
            sx={{
              justifyContent: "spaceBetween",
              width: "100%",
              mx: "auto",
              backgroundColor: "#fff",
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
