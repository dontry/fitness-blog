import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme, { GlobalStyle } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
