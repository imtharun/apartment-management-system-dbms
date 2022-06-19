import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader";
import HamContextProvider from "./HamContextProvider";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HamContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HamContextProvider>
  </React.StrictMode>
);
