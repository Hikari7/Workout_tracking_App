import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#e1bee7",
      main: "#EBDEF3",
      dark: "#B586D8",
      contrastText: "#1B225A",
    },
    secondary: {
      light: "#ff7961",
      main: "#fff",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#ECDEF6",
    },
  },
  typography: {
    // fontFamily: ["Varela", "Round"].join(","),
    fontFamily: ["Varela Round"].join(","),
  },
});

export default theme;
