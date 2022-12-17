import React, { useState, useCallback } from "react";
import { auth } from "../Config/configs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Typography, Box } from "@mui/material";
import { SignUpTextInput } from "../components/UI";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//onAuthStageChanged: auth stateが変わっているか判断
//もしページを更新してもわかる

//Loginのページ

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLading] = useState(false);

  const navigate = useNavigate();

  const sendLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("clicked");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      navigate("/home");
      setLading(false);
      toast.success("Successfuly signed out");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );
  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  return (
    <>
      <Container>
        <Box
          sx={{
            height: "auto",
            mx: "auto",
            mt: 4,
          }}
        >
          {loading ? (
            <Typography>Lading...</Typography>
          ) : (
            <>
              <Box>
                <Typography
                  component="h1"
                  sx={{
                    textAlign: "center",
                    mt: 6,
                    letterSpacing: 2,
                    fontSize: 36,
                    fontWeight: "bold",
                    color: "primary.contrastText",
                  }}
                >
                  Log in to your account
                </Typography>
              </Box>
              <ToastContainer />
              <Box sx={{ margin: 6 }}>
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
                  type={"password"}
                  onChange={inputPassword}
                />
              </Box>
              <Box onClick={sendLogin} textAlign="center">
                <Button
                  variant="contained"
                  component={Link}
                  to="/home"
                  sx={{
                    display: "block",
                    justifyContent: "center",
                    my: 4,
                    mx: "auto",
                    width: 120,
                    alignItems: "center",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </Box>
              <hr className="hr"></hr>
              <Box>
                <Typography
                  component="h1"
                  sx={{
                    textAlign: "center",
                    mt: 6,
                    letterSpacing: 2,
                    fontSize: 14,
                    color: "primary.contrastText",
                  }}
                >
                  Don't have an account?
                </Typography>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    component={Link}
                    to="/signup"
                    sx={{
                      mt: 2,
                      textTransform: "none",
                    }}
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Login;
