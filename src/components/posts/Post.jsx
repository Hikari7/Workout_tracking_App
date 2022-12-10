import { Typography, Container, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TwitterShareButton } from "react-twitter-embed";

function Post() {
  return (
    <>
      <Container>
        <Box
          sx={{
            width: "80%",
            height: "auto",
            mx: "auto",
            mt: 4,
          }}
        >
          <Card sx={{ width: "80%", mx: "auto", my: 4 }}>
            <CardMedia
              component="img"
              height="300"
              //   img
              src="https://images.unsplash.com/photo-1608330270368-0ae06ae8e4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="history img"
            />
            <CardContent sx={{ py: 4, px: 4 }}>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <div className="shareBtn">
              <TwitterShareButton
                url={"https://twitter.com/hk_Vancouver"}
                options={{
                  text: "#WorkoutTracker",
                  via: "hk_Vancouver",
                  size: "large",
                }}
              />
            </div>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Post;
