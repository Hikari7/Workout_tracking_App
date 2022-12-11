import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function Header() {
  const theme = useTheme();

  // console.log(theme);

  //✅poistion; sticky, top:0, z-indexを指定して固定させるようにしておく

  // const CustomNav = styled(AppBar)({
  //   // backgroundColor={theme.palette.primary.light},
  //   boxShadow: "none",
  //   // position: "sticky",
  // });

  return (
    <>
      {/* <Box > */}
      {/* <AppBar position="static" backgroundColor={theme.palette.primary.dark}> */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#B586D8",
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
          <Button
            color="secondary"
            variant="outlined"
            sx={{
              color: "inherit",
              marginLeft: "auto",
              "&:hover": {
                backgroundColor: "#888",
              },
              textTransform: "none",
            }}
          >
            Logout
          </Button>
        </Toolbar>
        {/* </CustomNav> */}
      </AppBar>
      {/* </Box> */}
    </>
  );
}

export default Header;
