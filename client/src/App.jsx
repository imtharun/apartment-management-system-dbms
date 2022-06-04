import React from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Lorem from "./components/Lorem";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Tenant from "./components/Tenant";
// import Admin from "./components/Admin";
import Owner from "./components/Owner";
import Aside from "./components/Aside";

function App() {
  const forAdmin = [
    "Owner Information",
    "Tenant Information",
    "Employee Information",
    "Apartment Fund ",
  ];
  const forAdminBox = [
    { "Total Employee": 100 },
    { "Total Floor": 10 },
    { "Total Block": 5 },
    { "Total Rent": "Rs. 20000" },
    { "Total Owner": 50 },
    { "Total Fund": 50000 },
  ];
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header forAdmin={forAdmin} />
              <section className="flex">
                <Aside forAdmin={forAdmin} />
                <Dashboard forAdminBox={forAdminBox} />
              </section>
            </main>
          }
        />
        <Route
          path="/employee"
          element={
            <main>
              <Header />
              <section className="flex">
                <Aside />
                <Employee />
              </section>
            </main>
          }
        />
        <Route
          path="/admin"
          element={
            <main>
              <Header />
              <section className="flex">
                <Aside />
                <Dashboard />
              </section>
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
