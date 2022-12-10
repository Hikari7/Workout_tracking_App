import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ColorTheme";
import Posts from "./components/posts/Posts";
import { Container, Box } from "@mui/material";

function App() {
  // console.log(theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Posts />
      </ThemeProvider>
    </div>
  );
}

export default App;
