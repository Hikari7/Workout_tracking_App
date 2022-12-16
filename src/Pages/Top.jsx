import React from "react";
import topimg from "../assets/topimg.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";
import { maxHeight } from "@mui/system";

const Top = () => {
  return (
    <>
      <Container sx={{ width: "60%" }}>
        <Box>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              mt: 6,
              letterSpacing: 2,
              fontSize: { lg: 48, md: 36 },
              fontWeight: "bold",
              color: "primary.contrastText",
              wordWrap: "breakWord",
            }}
          >
            Record your great workout activities
          </Typography>
          <Box sx={{ justifyContent: "center", width: "100%", mx: "auto" }}>
            <img src={topimg} alt="top img" className="topimg" />
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              component={Link}
              to="/login"
              sx={{
                mt: 4,
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Top;
