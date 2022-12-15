import { Container } from "@mui/material";
import React, { useState, useCallback } from "react";
import { MainTitle, SignUpTextInput } from "../components/UI";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/configs";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendSignUp = async (e) => {
    e.preventDefault();

    try {
      //get the promise
      const userCredential = await createUserWithEmailAndPassword(
        //firebaseのauthを渡す
        auth,
        // username,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
    } catch (err) {
      console.log(err.message);
      // toast.err("Something went wrong");
    }
  };

  //memo化してあげる
  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <>
      {/* ✅ContainerとMainTitleが効いていない */}
      <Container maxWidth="50%">
        <MainTitle>Sign Up</MainTitle>
        <form onSubmit={sendSignUp}>
          <SignUpTextInput
            fullWidth={true}
            label={"Username"}
            multiline={false}
            required={true}
            rows={1}
            value={username}
            type={"text"}
            onChange={inputUsername}
          />

          <SignUpTextInput
            fullWidth={true}
            label={"Eamil"}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={"text"}
            onChange={inputEmail}
          />
          <SignUpTextInput
            fullWidth={true}
            label={"Password"}
            multiline={false}
            required={true}
            rows={1}
            value={password}
            type={"Password"}
            onChange={inputPassword}
          />
        </form>

        <Button
          label={"Sign up"}
          variant="outlined"
          component={Link}
          to="/login"
          onClick={sendSignUp}
        >
          Sign up
        </Button>
      </Container>
    </>
  );
};

export default SignUp;
