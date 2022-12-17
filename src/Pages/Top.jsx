import React from "react";
import topimg from "../assets/App/topimg.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";
import { maxHeight } from "@mui/system";

const Top = () => {
  return (
    <>
      <div className="container">
        <Box
          sx={{
            mt: 10,
          }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              letterSpacing: 2,
              fontSize: { lg: 48, md: 36 },
              fontWeight: "bold",
              color: "primary.contrastText",
              wordWrap: "breakWord",
            }}
          >
            Record your great workout activities
          </Typography>
          <Box sx={{ justifyContent: "center", width: "100%" }}>
            <img src={topimg} alt="top img" className="topimg" />
          </Box>
          <Box textAlign="center">
            <Typography sx={{ color: "primary.contrastText", mt: 4 }}>
              The workout log app provides the store with your activity
              histories.
              <br></br>
              Start your daily workouts and grow your fitness!
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/login"
              sx={{
                mt: 4,
                py: 2,
                px: 4,
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Top;
