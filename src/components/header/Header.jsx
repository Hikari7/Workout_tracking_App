// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// import { createTheme } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function Header() {
  // const theme = useTheme();

  // console.log(theme);

  //✅poistion; sticky, top:0, z-indexを指定して固定させるようにしておく

  const CustomNav = styled(AppBar)({
    // backgroundColor: 'transparent',
    boxShadow: "none",
    // textAlign:'center',
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <CustomNav position="static">
        {/* <AppBar position="static" color={theme.palette.primary.light}> */}
        <Toolbar>
          <FitnessCenterIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness log
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            sx={{
              color: "inherit",
              marginLeft: "auto",
              "&:hover": {
                backgroundColor: "#888",
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </CustomNav>
    </Box>
  );
}

export default Header;
