import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post";
import PostBox from "../components/Posts/PostBox";
import { db, user } from "../Config/configs";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, storage } from "../Config/configs";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Home() {
  //collectionという関数でデータをpostsの取ってきている=postDataの変数に入れる

  //fireBaseにストアされた情報クエリとユーザーのinnputの情報とを一致させる
  // const user = auth.currentUser;
  // console.log(user);

  const [posts, setPosts] = useState([]);

  console.log(auth.currentUser);

  useEffect(() => {
    const {
      currentUser: { uid },
    } = getAuth();

    const postData = collection(db, "posts");

    const q = query(postData, where("userId", "==", uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(data);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   //postsのレファレンスを作る
  //   const postData = collection(db, "posts");
  //   console.log(auth.currentUser);

  //   const q = query(postData, orderBy("timestanp", "desc"));

  //   onSnapshot(q, (querySnapshot) => {
  //     setPosts(querySnapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

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
              height: 800,
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
              // avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
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

// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
//   console.log(email);
// }
