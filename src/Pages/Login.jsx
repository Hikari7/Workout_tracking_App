import React, { useState, useCallback } from "react";
import { auth } from "../config/configs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Typography } from "@mui/material";
import { MainTitle, SignUpTextInput, PrimaryBtn } from "../components/UI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignUp } from "../Pages/index";

//onAuthStageChanged: auth stateが変わっているか判断
//もしページを更新してもわかる

//Loginのページ

const Login = () => {
  // console.log(props);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const sendLogin = async (e) => {
    console.log("aaa");
    e.preventDefault();
    try {
      console.log("clicked");
      //get the promise
      const userCredential = await signInWithEmailAndPassword(
        //firebaseのauthを渡す
        auth,
        // loginUsername,
        loginEmail,
        loginPassword
      );

      navigate("/home");

      const user = userCredential.user;

      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log("asdasd");
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
        {/* <form onSubmit={sendLogin}> */}
        {/* <SignUpTextInput
            fullWidth={true}
            label={"Username"}
            multiline={false}
            required={true}
            rows={1}
            value={loginUsername}
            type={"text"}
            onChange={inputUsername}
          /> */}
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
        {/* ✅ここが分からん */}
        <div onClick={sendLogin}>
          <Button
            label={"Login"}
            variant="outlined"
            component={Link}
            to="/home"
          >
            Login
          </Button>
          {/* <PrimaryBtn label={"Login"}>
            <Link to="/home"></Link>
          </PrimaryBtn> */}
        </div>
        {/* <Button */}
        {/* // component={Link}
        // to="/home"
        // variant="contained"
        // color="primary"
        > */}
        {/* </form> */}
        {/* <Link
          component="button"
          variant="content"
          onClick={() => {
            sendLogin;
          }}
        >
          Log in
        </Link> */}
        <Container>
          <Typography>No account?</Typography>
          {/* <PrimaryBtn
            label={"Sign up"} */}
          {/* // component={RouterLink}
            // to="/signup"
          ></PrimaryBtn> */}

          <Button
            label={"Sign up"}
            variant="outlined"
            component={Link}
            to="/signup"
          >
            Sign up
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Login;
