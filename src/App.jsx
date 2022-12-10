import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ColorTheme";

function App() {
  // console.log(theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
