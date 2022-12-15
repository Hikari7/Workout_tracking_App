import React, { useState, useCallback } from "react";
import { auth } from "../config/configs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Typography } from "@mui/material";
import { MainTitle, SignUpTextInput, PrimaryBtn } from "../components/UI";
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "../Pages/index";
import { toast } from "react-toastify";
//onAuthStageChanged: auth stateが変わっているか判断
//もしページを更新してもわかる

//Loginのページ

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLading] = useState(false);

  const navigate = useNavigate();

  const sendLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("clicked");
      //get the promise
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      navigate("/home");
      console.log(user);

      setLading(false);
      // toast.success("Successfuly logged in");
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
      // toast.error("Something went wrong");
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
      <Container maxWidth="50%">
        {loading ? (
          <Typography>Lading...</Typography>
        ) : (
          <>
            <Typography>Log In to your account</Typography>

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

            <div onClick={sendLogin}>
              <Button
                label={"Login"}
                variant="outlined"
                component={Link}
                to="/home"
              >
                Login
              </Button>
            </div>

            <Container>
              <Typography>Don't have an account?</Typography>

              <Button variant="outlined" component={Link} to="/signup">
                Sign up
              </Button>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default Login;
