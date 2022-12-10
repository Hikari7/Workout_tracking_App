// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function Header() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* <AppBar position="static" color={theme.palette.primary.light}> */}
        <Toolbar>
          <FitnessCenterIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </FitnessCenterIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness log
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
