import React from "react";
import { Button, Typography, Box } from "@mui/material";
import LoginHeader from "../UI/header/LoginHeader";
import { Container } from "@mui/system";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { auth, provider } from "../../config/configs";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  //useAuthStateで今の状態をuser変数の中に入れることができる
  //そのuserがNullなのか何か入っているのか判断できる
  const [user] = useAuthState(auth);

  return (
    <div>
      {/* userがtrueであれば？以降が表示、falseであれば(ログインしていなければsigninbutonが表示) */}
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

//Googleでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  //Twitterのサインインはドメインをちゃんと入手してからが良いみたい
  //   const signInWithTwitter = () => {
  //     const provider = new TwitterAuthProvider();
  //     signInWithPopup(auth, provider)
  //       .then((re) => {
  //         console.log(re);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <>
      <LoginHeader />
      <Container>
        <Typography>Track your day and stay healthy!</Typography>
        <Button onClick={signInWithGoogle}>Sign In</Button>
        {/* <Button onClick={signInWithTwitter}>Sign In</Button> */}
      </Container>
    </>
  );
}

//Googleでサインインアウト

function SignOutButton() {
  return (
    <>
      <LoginHeader />
      <Container>
        <Typography>Track your day and stay healthy!</Typography>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      </Container>
    </>
  );
}

function UserInfo() {
  return (
    <Box>
      {/* <img src={auth.currentUser.photoURL} /> */}
      <img
        slot="start"
        referrerPolicy="no-referrer"
        src={auth.currentUser.photoURL}
      />

      <p>{auth.currentUser.displayName}</p>
    </Box>
  );
}
