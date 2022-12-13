import "./App.css";
import Header from "./components/UI/header/Header";
import Home from "./components/home/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import TimeLine from "./components/posts/Timeline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      {/* <div className="App bgColor">
        <Header />
        <TimeLine />
      </div> */}
    </ThemeProvider>
  );
}

export default App;
