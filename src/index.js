import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UsingReducers from "./components/usingReducers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UsingReducers />
  </React.StrictMode>,
  rootElement
);
