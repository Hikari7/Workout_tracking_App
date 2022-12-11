import { Typography, Container, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TwitterShareButton } from "react-twitter-embed";

function Post({ verified, text, hours, minuets, image }) {
  return (
    <>
      <Container>
        <Box
          sx={{
            width: "100%",
            maxHeight: 800,
            mx: "auto",
            mt: 4,
            overflowY: "scroll",
            scrollbarBaseColor: "#B586D8",
            scrollbarColor: "#B586D8",
            display: { md: "flex" },
            flexWrap: { md: "wrap" },
          }}
        >
          <Card sx={{ maxWidth: { sm: "80%", md: "40%" }, mx: "auto", my: 4 }}>
            <CardMedia
              component="img"
              height="300"
              src={image}
              alt="history img"
            />
            <CardContent sx={{ py: 4, px: 4 }}>
              <Typography variant="body1" color="text.secondary">
                {hours} hours
                <br></br>
                {minuets} minuets
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {text}
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
          <Card sx={{ maxWidth: { sm: "80%", md: "40%" }, mx: "auto", my: 4 }}>
            <CardMedia
              component="img"
              height="300"
              src={image}
              alt="history img"
            />
            <CardContent sx={{ py: 4, px: 4 }}>
              <Typography variant="body1" color="text.secondary">
                {hours} hours
                <br></br>
                {minuets} minuets
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {text}
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
          <Card sx={{ maxWidth: { sm: "80%", md: "40%" }, mx: "auto", my: 4 }}>
            <CardMedia
              component="img"
              height="300"
              src={image}
              alt="history img"
            />
            <CardContent sx={{ py: 4, px: 4 }}>
              <Typography variant="body1" color="text.secondary">
                {hours} hours
                <br></br>
                {minuets} minuets
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {text}
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
