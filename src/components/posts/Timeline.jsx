import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import db from "../../config/configs";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

// import fireStoreDB from "./config/configs"

function TimeLine() {
  //collectionという関数でデータをpostsの取ってきている=postDataの変数に入れる

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    //postをタイムスタンプ順に並び替える
    const q = query(postData, orderBy("timestanp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    //   console.log(postData);
    // });

    //リアルタイムでデータを取得する
    onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot);
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
            <Container>
              <Box
                sx={{
                  width: "100%",
                  maxHeight: 800,
                  mx: "auto",
                  justifyContent: "center",
                  mt: 4,
                  overflowY: "scroll",
                  //✅後で調べる
                  // scrollbarBaseColor: "#B586D8",
                  // scrollbarColor: "#B586D8",
                  display: { md: "flex" },
                  flexWrap: "wrap",
                }}
              >
                {/* Post */}
                <FlipMove>
                  {posts.map((post) => (
                    <Post
                      // key={Date.now()}
                      key={post.text}
                      image={post.image}
                      hours={post.hours}
                      minuets={post.minuets}
                      text={post.text}
                    />
                  ))}
                </FlipMove>
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TimeLine;
