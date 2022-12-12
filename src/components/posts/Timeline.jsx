//ShincodeのTimeLineにあたります

import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import db from "../../config/configs";
import { collection, getDocs } from "firebase/firestore";
// import fireStoreDB from "./config/configs"

function TimeLine() {
  //collectionという関数でデータをpostsの取ってきている=postDataの変数に入れる

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
      console.log(postData);
    });
  }, []);

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
              mr: { lg: 2 },
              borderRadius: 3,
              py: 3,
              maxHeight: 700,
              minWidth: { lg: "25%" },
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
                color: "primary.contrastText",
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
              ml: { lg: 2 },
              py: 3,
              borderRadius: 3,
              maxHeight: "auto",
              minWidth: { lg: "60%" },
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
                color: "primary.contrastText",
              }}
            >
              Activity Histories
            </Typography>
            {posts.map((post) => (
              <Post
                key={Date.now()}
                image={post.image}
                hours={post.hours}
                minuets={post.minuets}
                text={post.text}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TimeLine;
