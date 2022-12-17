import { Button, Container, Typography, Box } from "@mui/material";
import React, { useState, useCallback } from "react";
import { SignUpTextInput } from "../components/UI";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/configs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLading(false);
      navigate("/login");
      toast.success("Acount created");
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

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
            <Typography
              component="h1"
              sx={{
                textAlign: "center",
                mt: 10,
                letterSpacing: 2,
                fontSize: 36,
                fontWeight: "bold",
                color: "primary.contrastText",
              }}
            >
              Sign Up
            </Typography>
            <Box sx={{ margin: 4 }}>
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
            </Box>
            <Box textAlign="center">
              <Button
                component={Link}
                to="/home"
                sx={{
                  mt: 2,
                  mb: 4,
                  textTransform: "none",
                }}
                variant="contained"
                onClick={sendSignUp}
              >
                Create Your Account
              </Button>
            </Box>
            <hr className="hr"></hr>
            <Typography
              sx={{
                textAlign: "center",
                mt: 6,
                letterSpacing: 2,
                fontSize: 14,
              }}
            >
              Already have an account?
            </Typography>
            <Box textAlign="center">
              <Button
                label={"Login"}
                variant="contained"
                component={Link}
                to="/home"
                sx={{
                  mt: 2,
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default SignUp;
