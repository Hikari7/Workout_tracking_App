import React, { useState, useCallback } from "react";
import { auth } from "../config/configs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Typography } from "@mui/material";
import { MainTitle, SignUpTextInput, PrimaryBtn } from "../components/UI";
import { SignUp } from "../Pages/index";
import App from "../routes/App";

//onAuthStageChanged: auth stateが変わっているか判断
//もしページを更新してもわかる

//Loginのページ

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const sendLogin = async (e) => {
    e.preventDefault();

    try {
      //get the promise
      const userCredential = await signInWithEmailAndPassword(
        //firebaseのauthを渡す
        auth,
        loginUsername,
        loginEmail,
        loginPassword
      );

      const user = userCredential.user;

      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  //memo化してあげる
  const inputUsername = useCallback(
    (e) => {
      setLoginUsername(e.target.value);
    },
    [setLoginUsername]
  );
  const inputEmail = useCallback(
    (e) => {
      setLoginEmail(e.target.value);
    },
    [setLoginEmail]
  );
  const inputPassword = useCallback(
    (e) => {
      setLoginPassword(e.target.value);
    },
    [setLoginPassword]
  );

  return (
    <>
      {/* ✅ContainerとMainTitleが効いていない */}
      <Container maxWidth="50%">
        <MainTitle>Log In</MainTitle>
        <form onSubmit={sendLogin}>
          <SignUpTextInput
            fullWidth={true}
            label={"Username"}
            multiline={false}
            required={true}
            rows={1}
            value={loginUsername}
            type={"text"}
            onChange={inputUsername}
          />

          <SignUpTextInput
            fullWidth={true}
            label={"Eamil"}
            multiline={false}
            required={true}
            rows={1}
            value={loginEmail}
            type={"text"}
            onChange={inputEmail}
          />
          <SignUpTextInput
            fullWidth={true}
            label={"Password"}
            multiline={false}
            required={true}
            rows={1}
            value={loginPassword}
            type={"Password"}
            onChange={inputPassword}
          />
        </form>
        <div onClick={sendLogin}>
          <PrimaryBtn type="submit" label={"Login"}></PrimaryBtn>
        </div>
        <Container>
          <Typography>No account?</Typography>
          <PrimaryBtn
            label={"Sign up"}
            // component={RouterLink}
            // to="/signup"
          ></PrimaryBtn>
        </Container>
      </Container>
    </>
  );
};

export default Login;
