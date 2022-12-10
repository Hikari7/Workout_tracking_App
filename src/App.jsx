import "./App.css";
import Header from "./components/header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import Posts from "./components/posts/Posts";


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
