import { createTheme } from "@mui/material/styles";
// import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      light: "#e1bee7",
      main: "#ce93d8",
      dark: "#82488c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default theme;
