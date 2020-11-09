import React from "react";
import { robertsTheme } from "./theme";
import { ThemeProvider } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MainView from "./views/Main";

library.add(fas);

function App() {
  return (
    <ThemeProvider theme={robertsTheme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
