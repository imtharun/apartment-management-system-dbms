import React from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Lorem from "./components/Lorem";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Tenant from "./components/Tenant";
import Admin from "./components/Admin";
import Owner from "./components/Owner";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header />
              <Dashboard />
            </main>
          }
        />
        <Route
          path="/employee"
          element={
            <main>
              <Header />
              <Employee />
            </main>
          }
        />
        <Route
          path="/admin"
          element={
            <main>
              <Header />
              <Admin />
            </main>
          }
        />
        <Route
          path="/tenant"
          element={
            <main>
              <Header />
              <Tenant />
            </main>
          }
        />
        <Route
          path="/owner"
          element={
            <main>
              <Header />
              <Owner />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
