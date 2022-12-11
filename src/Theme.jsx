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
      main: "#1B225A",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "linear-gradient(circle, #eeaeca 0%, #94bbe9 100%)",
    },

    // background: {
    // default:
    //   // "linear-gradient(circle, #eeaeca 0%, #94bbe9 100%)",
    // },
  },
  typography: {
    fontFamily: ["Varela Round"].join(","),
  },
  // components: {
  //   // overrides: {
  //   // MuiCssBaseline: {
  //   "@global": {
  //     body: {
  //       // background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
  //       background: "#ba000d",
  //       // backgroundRepeat: "no-repeat",
  //       // backgroundAttachment: "fixed",
  //       // },
  //     },
  //     // },
  //   },
  // },

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
