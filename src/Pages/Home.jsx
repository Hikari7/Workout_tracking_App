import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post";
import PostBox from "../components/Posts/PostBox";
import { db } from "../Config/configs";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../Config/configs";
import { getAuth } from "firebase/auth";
import postDefautl from "../assets/postDefault.svg";

function Home() {
  //collectionという関数でデータをpostsの取ってきている=postDataの変数に入れる

  //fireBaseにストアされた情報クエリとユーザーのinnputの情報とを一致させる
  // const user = auth.currentUser;
  // console.log(user);

  const [posts, setPosts] = useState([]);

  // console.log(auth.currentUser);

  useEffect(() => {
    const {
      currentUser: { uid },
    } = getAuth();

    const postData = collection(db, "posts");

    //Firebaseのuseridとauthで出てきたuid
    const q = query(
      postData,
      // orderBy("timestanp", "desc"),
      where("userId", "==", uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(data);
    });

    return () => unsubscribe();
  }, []);

  const {
    currentUser: { uid, displayName },
  } = getAuth();

  // const q = query(ordersRef, orderBy("timestanp", "desc"));
  return (
    <div className="bgColor margin">
      <Container maxWidth="90%">
        <Box sx={{ display: { lg: "flex" } }}>
          <Box
            sx={{
              background: "#fff",
              // mt: 8,
              m: { sm: 4, md: 8 },
              mr: { lg: 2 },
              borderRadius: 3,
              py: 3,
              height: "auto",
              minWidth: { lg: "30%" },
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
              displayName={displayName}
              username="hk_Vancouver"
              verified={true}
            />
          </Box>
          <Box
            sx={{
              background: "#fff",
              mt: 8,
              mx: { sm: 4, md: 8 },
              ml: { lg: 2 },
              py: 3,
              borderRadius: 3,
              minWidth: { lg: "60%" },
              minHeight: 320,
              position: "relative",
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
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {posts.length > 0 ? (
                  posts?.map((post) => {
                    console.log(post);
                    return (
                      <>
                        <Post
                          key={uuidv4()}
                          date={post.date}
                          image={post.image}
                          hours={post.hours}
                          minuets={post.minuets}
                          text={post.text}
                        />
                      </>
                    );
                  })
                ) : (
                  <Box sx={{ position: { md: "absolute", top: "30%" } }}>
                    <Typography
                      component="h1"
                      sx={{
                        textAlign: "center",
                        letterSpacing: 2,
                        fontSize: 18,
                        color: "primary.contrastText",
                        alignItems: "center",
                      }}
                    >
                      Let's record today's activity!
                    </Typography>
                    <img
                      src={postDefautl}
                      alt="post default img"
                      className="postDefault"
                    />
                  </Box>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
      <div className="margin"></div>
    </div>
  );
}

export default Home;
