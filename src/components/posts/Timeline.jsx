//ShincodeのTimeLineにあたります

import { useTheme } from "@emotion/react";
import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Post from "./Post";
import PostBox from "./PostBox";

function TimeLine() {
  const theme = useTheme();

  return (
    <>
      {/* PostHeader */}
      <Container maxWidth="90%">
        {/* lgのサイズになったらdisplay:flexになる */}
        <Box sx={{ display: { lg: "flex" } }}>
          <Box
            sx={{
              background: "#fff",
              mt: 8,
              m: { sm: 4, md: 8 },
              borderRadius: 3,
              py: 3,
              maxHeight: 700,
            }}
          >
            <Typography
              component="h1"
              sx={{
                textAlign: "center",
                mt: 8,
                letterSpacing: 2,
                fontSize: 18,
                fontWeight: "bold",
                color: "#1B225A",
              }}
            >
              Today's activity
            </Typography>

            <PostBox />
          </Box>
          <Box
            sx={{
              background: "#fff",
              mt: 8,
              m: { sm: 4, md: 8 },
              py: 3,
              borderRadius: 3,
              maxHeight: "auto",
            }}
          >
            <Typography
              component="h1"
              sx={{
                textAlign: "center",
                mt: 8,
                letterSpacing: 2,
                fontSize: 18,
                fontWeight: "bold",
                color: "#1B225A",
              }}
            >
              Activity Histories
            </Typography>
            <Post />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TimeLine;
