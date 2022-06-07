/* eslint-disable no-multi-str */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Aside from "./components/Aside";
import Auth from "./components/Auth";
import OwnerDetails from "./components/OwnerDetails";
import TenantDetails from "./components/TenantDetails";
import CreatingOwner from "./components/CreatingOwner";
import CreatingParkingSlot from "./components/CreatingParkingSlot";
import ComplaintsViewer from "./components/ComplaintsViewer";
import Maintenance from "./components/Maintenance";
import RaisingComplaints from "./components/RaisingComplaints";
import ParkingSlot from "./components/ParkingSlot";
import PayMaintenance from "./components/PayMaintenance";
import RentDetails from "./components/RentDetails";
import SalaryStatus from "./components/SalaryStatus";
import { useEffect } from "react";
import axios from "axios";
// import Lorem from "./components/Lorem";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [whom, setWhom] = useState("");
  useEffect(() => {
    console.log(whom);
    axios
      .get(`http://localhost:5000/dashboard/${whom}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [whom]);

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

  const forEmployee = ["Salary Status", "Complaints"];
  const forEmployeeBox = [
    { "Total complaints": 3 },
    { "Salary Details": "Rs. 20,000" },
  ];

  const forTenant = [
    "Raising Complaints",
    "Alloted Parking slot",
    "Pay maintenance",
  ];

  const forTenantBox = [
    { "Tenant Name": "Tharun" },
    { "Tenant age": 20 },
    { "No. of members in Family": 5 },
    { "Adhaar number": 123456 },
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

  const oHeader = ["Owner Id", "Name", "Age", "Adhaar no", "dob"];
  const ownerData = [
    { oid: 1, name: "Tharun", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { oid: 2, name: "D K suryah", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { oid: 3, name: "Yuvarraj", age: 20, adhaar: 123456, dob: "21-May-2002" },
    { oid: 4, name: "Shivanesh", age: 20, adhaar: 123456, dob: "21-May-2002" },
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

  const allotedSlots = ["A-123", "B-2131", "C-12312"];

  const monthlyDetails = [
    { "Total Owners": 59 },
    { "Total Paid": 39 },
    { "Total not paid": 20 },
    { "Total Payment": "Rs. 20,000" },
  ];

  const maintenanceHeader = ["Name", "Flat no", "Mobile number", "Status"];
  const maintenanceRows = {
    Name: "Tharunprasath A S",
    flatNo: 123,
    mobileNumber: 987654321,
  };

  const oTenetData = [
    {
      tno: 1,
      name: "Tharun",
      age: 20,
      adhaar: 123456,
      dob: "21-May-2002",
      status: "paid",
    },
    {
      tno: 2,
      name: "D K suryah",
      age: 20,
      adhaar: 123456,
      dob: "21-May-2002",
      status: "pending",
    },
    {
      tno: 3,
      name: "Yuvarraj",
      age: 20,
      adhaar: 123456,
      dob: "21-May-2002",
      status: "pending",
    },
    {
      tno: 4,
      name: "Shivanesh",
      age: 20,
      adhaar: 123456,
      dob: "21-May-2002",
      status: "paid",
    },
  ];

  const salaryStatusHeader = [
    "Eid",
    "Name",
    "age",
    "adhaar",
    "Month",
    "status",
  ];

  const salaryStatusRows = [
    {
      eid: 1,
      name: "Tharun",
      age: 20,
      adhaar: 123456,
      month: "January",
      status: "Received",
    },
    {
      eid: 2,
      name: "D K suryah",
      age: 20,
      adhaar: 123456,
      month: "Feburary",
      status: "Received",
    },
    {
      eid: 3,
      name: "Yuvarraj",
      age: 20,
      adhaar: 123456,
      month: "March",
      status: "Received",
    },
    {
      eid: 4,
      name: "Shivanesh",
      age: 20,
      adhaar: 123456,
      month: "April",
      status: "Pending",
    },
  ];

  return (
    <div className="App font-mons">
      <Routes>
        <Route
          path="/"
          element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} whom={whom} setWhom={setWhom} />}
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
                <OwnerDetails header={oHeader} ownerData={ownerData} />
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
                <ComplaintsViewer complaints={compSubj} />
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
        <Route
          path="/tenant/allotedparkingslot"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forTenant} />
              <section className="p-5">
                <ParkingSlot allotedSlots={allotedSlots} />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant/paymaintenance"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forTenant} />
              <section className="p-5">
                <PayMaintenance
                  maintenanceHeader={maintenanceHeader}
                  maintenanceRows={maintenanceRows}
                />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/tenantdetails"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forOwner} />
              <section className="p-5">
                <TenantDetails header={header} tenetData={tenetData} />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/tenantdetails"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forOwner} />
              <section className="p-5">
                <TenantDetails header={header} tenetData={tenetData} />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/complaint"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forOwner} />
              <section className="p-5">
                <ComplaintsViewer complaints={compSubj} />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/rentdetails"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forOwner} />
              <section className="p-5">
                <RentDetails
                  header={[...header, "status"]}
                  tenetData={oTenetData}
                />
              </section>
            </main>
          }
        />
        <Route
          path="/employee/complaints"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forEmployee} />
              <section className="p-5">
                <ComplaintsViewer complaints={compSubj} />
              </section>
            </main>
          }
        />
        <Route
          path="/employee/salarystatus"
          element={
            <main>
              <Header isAuth={isAuth} forHam={forEmployee} />
              <section className="p-5">
                <SalaryStatus
                  salaryStatusHeader={salaryStatusHeader}
                  salaryStatusRows={salaryStatusRows}
                />
              </section>
            </main>
          }
        />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
