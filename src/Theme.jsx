import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EBDEF3",
      main: "#e1bee7",
      dark: "#B586D8",
      contrastText: "#1B225A",
    },
    secondary: {
      light: "#9BBAE6",
      main: "#fff",
      // dark: "#ba000d",
      contrastText: "#333",
    },
    button: { main: "#1B225A" },
    background: {
      default: "linear-gradient(circle, #eeaeca 0%, #94bbe9 100%)",
    },
  },
  typography: {
    fontFamily: ["Varela Round"].join(","),
  },

  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
});

export default theme;

// export const backGround = createTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         body: {
//           background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         },
//       },
//     },
//   },
//   // palette: {
//   //   type: "dark",
//   // },
// });
