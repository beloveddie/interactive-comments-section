import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./themes";
import { AppContainer } from "./styles";
import { Comment } from "./Comment";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Button variant="contained">GOD IS SO GOOD!</Button>
        <Comment />
        <Comment />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
