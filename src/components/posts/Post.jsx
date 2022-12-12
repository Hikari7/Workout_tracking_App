import { Typography } from "@mui/material";
import React, { forwardRef } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TwitterShareButton } from "react-twitter-embed";

const Post = forwardRef(({ verified, text, hours, minuets, image }, ref) => {
  return (
    <div ref={ref}>
      <Card
        sx={{
          maxWidth: { sm: "80%", md: "40%" },
          mx: 3,
          my: 4,
          minWidth: 300,
        }}
      >
        <CardMedia component="img" height="300" src={image} alt="history img" />
        <CardContent sx={{ py: 4, px: 4 }}>
          <Typography variant="body1" color="primary.contrastText">
            {hours}.{minuets} hours
          </Typography>
          <Typography
            variant="body2"
            color="secondary.contrastText"
            sx={{ mt: 2 }}
          >
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
    </div>
  );
});

export default Post;
