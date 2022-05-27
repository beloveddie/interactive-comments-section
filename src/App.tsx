import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";
import { AppContainer } from "./styles";
import { InteractiveCommentSection } from "./InteractiveCommentSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <InteractiveCommentSection />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
