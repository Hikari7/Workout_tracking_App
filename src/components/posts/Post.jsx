import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TwitterShareButton } from "react-twitter-embed";
import dayjs from "dayjs";
import { Login } from "@mui/icons-material";

function Post({ verified, text, hours, minuets, image, date }) {
  //it looks like a time stamp
  console.log(date.seconds);

  const ts = new Date(date.seconds);
  console.log(ts);
  console.log(ts.toDateString());

  return (
    <>
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
          <Typography>{ts.toDateString()}</Typography>
          {/* <Typography>{date}</Typography> */}
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
    </>
  );
}

export default Post;
