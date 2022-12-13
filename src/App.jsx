import "./App.css";
import Header from "./components/header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import TimeLine from "./components/posts/Timeline";

function App() {


  return (
    <div className="App bgColor">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <TimeLine />
      </ThemeProvider>
    </div>
  );
}

export default App;
