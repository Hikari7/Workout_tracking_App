import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { auth } from "../../config/configs";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { getAuth } from "firebase/auth";
import { Box } from "@mui/material";

function Header() {
  const { currentUser } = getAuth();

  console.log("Header", currentUser);
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
          <Box>
            {/* {currentUser ? ( */}
              <Button
                onClick={() => {
                  auth.signOut();
                }}
                component={Link}
                to="/login"
                color="button"
                variant="outlined"
                sx={{
                  marginLeft: "auto",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                  textTransform: "none",
                }}
              >
                Logout
              </Button>
            {/* ) : (
              ""
            )} */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
