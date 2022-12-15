import { Container, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import { MainTitle, SignUpTextInput } from "../components/UI";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/configs";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLading] = useState(false);

  const navigate = useNavigate();

  const sendSignUp = async (e) => {
    e.preventDefault();
    setLading(true);

    try {
      //get the promise
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLading(false);
      navigate("/login");
      // toast.success("Acount created");
    } catch (error) {
      console.log(error.message);
      // toast.error("Something went wrong");
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
      <Container maxWidth="50%">
        {loading ? (
          <Typography>Lading...</Typography>
        ) : (
          <>
            <Typography>Sign Up</Typography>
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
                label={"Email"}
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
              variant="outlined"
              component={Link}
              to="/login"
              onClick={sendSignUp}
            >
              Create your account
            </Button>
            <hr></hr>

            <Typography>Already have an account?</Typography>
            <Button
              label={"Login"}
              variant="outlined"
              component={Link}
              to="/home"
            >
              Login
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default SignUp;
