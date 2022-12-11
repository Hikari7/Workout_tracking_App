//ShincodeのTimeLineにあたります

import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Post from "./Post";
import PostBox from "./PostBox";

function TimeLine() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="90%">
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

            <PostBox
              displayName="Hikari Kobe"
              username="hk_Vancouver"
              avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
              verified={true}
            />
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
            <Post
              image="https://images.unsplash.com/photo-1608330270368-0ae06ae8e4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              hours="1"
              minuets="30"
              text="I trained my hip today!🍑"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TimeLine;
