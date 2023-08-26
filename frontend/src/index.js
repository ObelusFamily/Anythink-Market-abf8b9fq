import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  ,

  document.getElementById("root")
);
