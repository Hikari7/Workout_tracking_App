//✅多分templatesフォルダに格納されることになる

import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post";
import PostBox from "../components/Posts/PostBox";
import db from "../Config/configs";
import {
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  query,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function Home() {
  //collectionという関数でデータをpostsの取ってきている=postDataの変数に入れる

  const [posts, setPosts] = useState([]);

  // async function fetchData() {
  //   try {
  //     // const querySnapshot = await getDocs(collection(db, "posts"));
  //     // const q = query(querySnapshot, orderBy("timestanp", "desc"));
  //     const ordersRef = collection(db, "posts");
  //     const q = query(ordersRef, orderBy("timestanp", "desc"));
  //     const querySnapshot = await getDocs(q);

  //     onSnapshot(querySnapshot, (Snapshot) => {
  //       setPosts(Snapshot.docs.map((doc) => doc.data()));
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
              maxHeight: 700,
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
              mx: { sm: 4, md: 8 },
              ml: { lg: 2 },
              py: 3,
              borderRadius: 3,
              minWidth: { lg: "60%" },
              minHeight: 320,
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
                {
                  posts.length > 0 ? (
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
                    <Typography
                      component="h1"
                      sx={{
                        textAlign: "center",
                        m: "10vh",
                        letterSpacing: 2,
                        fontSize: 18,
                        color: "primary.contrastText",
                      }}
                    >
                      Let's record today's activity!
                    </Typography>
                  )
                  // ? (
                  //   posts.length > 0
                  // ) : (
                  //   <Typography
                  //     component="h1"
                  //     sx={{
                  //       textAlign: "center",
                  //       m: "10vh",
                  //       letterSpacing: 2,
                  //       fontSize: 18,
                  //       color: "primary.contrastText",
                  //     }}
                  //   >
                  //     Loading...
                  //   </Typography>
                  // )
                }
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
