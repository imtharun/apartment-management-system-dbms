import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import HamContextProvider from "./HamContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HamContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HamContextProvider>
  </React.StrictMode>
);
