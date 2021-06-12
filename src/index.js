import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

// import Providers from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    {/* <Providers> */}
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    {/* </Providers> */}
  </React.StrictMode>,
  document.getElementById("root")
);
