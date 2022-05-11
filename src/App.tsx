import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>
        Interactive comments section.... <i>coming soon</i>
      </h1>
      <Button variant="contained">All good</Button>
    </ThemeProvider>
  );
}

export default App;
