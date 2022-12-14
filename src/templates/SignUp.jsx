import { Box, Container, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import { MainTitle, SignUpTextInput, PrimaryBtn } from "../components/UI";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  const inputConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <>
      {/* ✅ContainerとMainTitleが効いていない */}
      <Container maxWidth="50%">
        <MainTitle>Sign Up</MainTitle>
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

        <SignUpTextInput
          fullWidth={true}
          label={"Confirm Password"}
          multiline={false}
          required={true}
          rows={1}
          value={confirmPassword}
          type={"Password"}
          onChange={inputConfirmPassword}
        />
        <PrimaryBtn label={"Sign Up"} onClick={() => console.log("aaa")} />
      </Container>
    </>
  );
};

export default SignUp;
