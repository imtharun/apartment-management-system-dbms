/* eslint-disable no-multi-str */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Aside from "./components/Aside";
import Auth from "./components/Auth";
import OwnerDetails from "./components/OwnerDetails";
import TenantDetails from "./components/TenantDetails";
import CreatingOwner from "./components/CreatingOwner";
import CreatingParkingSlot from "./components/CreatingParkingSlot";
import CompaintsViewer from "./components/CompaintsViewer";
import Maintenance from "./components/Maintenance";
import RaisingComplaints from "./components/RaisingComplaints";
// import Lorem from "./components/Lorem";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const forAdmin = [
    "Tenant Details",
    "Owner Details",
    "Create owners",
    "Alloting Parking slot",
    "Complaints",
    "Maintenance Fee",
  ];
  const forAdminBox = [
    { "Total Owner": 59 },
    { "Total Paid": 39 },
    { "Total not paid": 20 },
    { "Total Payement": "Rs. 30,000" },
  ];

  const forEmployee = [
    "Tenant Details",
    "Owner Details",
    "Salary Status",
    "Compaints",
  ];
  const forEmployeeBox = [
    { "Total tenant": 5 },
    { "Total Owner": 3 },
    { "Salary Details": "Rs. 20,000" },
  ];

  const forTenant = [
    "Raising Compaints",
    "Notice Board",
    "Alloted Parking slot",
    "Pay maintenance",
  ];
  const forTenantBox = [
    { "Tenant Name": "Tharunprasath A S " },
    { "Tenant age": 20 },
    { "No. of members in Family": 5 },
    { "Adhaar number": 1234567890 },
  ];

  const forOwner = ["Rent details", "Tenant details", "Complaint"];
  const forOwnerBox = [
    { "Rent received": "Rs. 14,000" },
    { "Total Tenant": 4 },
    { "Total complaints": 2 },
  ];

  const header = ["Tenet no", "Name", "Age", "Adhaar no", "dob"];
  const tenetData = [
    { tno: 1, name: "Tharun", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { tno: 2, name: "D K suryah", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { tno: 3, name: "Yuvarraj", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { tno: 4, name: "Shivanesh", age: 20, adhaar: 123456, dob: "21-May-2002" },
  ];

  const compSubj = [
    {
      complaints1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      compalints2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      complaints3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
  ];

  const monthlyDetails = [
    { "Total Owners": 59 },
    { "Total Paid": 39 },
    { "Total not paid": 20 },
    { "Total Payment": "Rs. 20,000" },
  ];

  const maintenanceHeader = ["Name", "Flat no", "Mobile number", "Status"];
  const maintenanceRows = [
    {
      Name: "Tharunprasath A S",
      flatNo: 123,
      mobileNumber: 987654321,
      status: "paid",
    },
    {
      Name: "Tharunprasath A S",
      flatNo: 123,
      mobileNumber: 987654321,
      status: "paid",
    },
    {
      Name: "Tharunprasath A S",
      flatNo: 123,
      mobileNumber: 987654321,
      status: "paid",
    },
  ];

  return (
    <div className="App font-mons">
      <Routes>
        <Route
          path="/"
          element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/admin"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="flex">
                <Aside forHam={forAdmin} />
                <Dashboard forBox={forAdminBox} />
              </section>
            </main>
          }
        />
        <Route
          path="/employee"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forEmployee} />
              <section className="flex">
                <Aside forHam={forEmployee} />
                <Dashboard forBox={forEmployeeBox} />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forTenant} />
              <section className="flex">
                <Aside forHam={forTenant} />
                <Dashboard forBox={forTenantBox} />
              </section>
            </main>
          }
        />
        <Route
          path="/owner"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forOwner} />
              <section className="flex">
                <Aside forHam={forOwner} />
                <Dashboard forBox={forOwnerBox} />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/ownerdetails"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <OwnerDetails />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/tenantdetails"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <TenantDetails header={header} tenetData={tenetData} />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/createowners"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <CreatingOwner />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/allotingparkingslot"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <CreatingParkingSlot />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/complaints"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <CompaintsViewer complaints={compSubj} />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/maintenancefee"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forAdmin} />
              <section className="p-5">
                <Maintenance
                  monthlyDetails={monthlyDetails}
                  maintenanceHeader={maintenanceHeader}
                  maintenanceRows={maintenanceRows}
                />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant/raisingcomplaints"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forTenant} />
              <section className="p-5">
                <RaisingComplaints />
              </section>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
