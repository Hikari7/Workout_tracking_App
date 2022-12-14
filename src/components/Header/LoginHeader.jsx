import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function LoginHeader() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <FitnessCenterIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Workout Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default LoginHeader;
