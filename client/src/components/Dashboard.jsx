import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { HamContext } from "../HamContextProvider";

function Dashboard(props) {
  const { hamActive, hamHandler } = useContext(HamContext);
  const [forBox, setForBox] = useState();

  const getBoxInfo = async () => {
    const whom = JSON.parse(window.localStorage.getItem("whom")).userType;
    try {
      const res = await axios.post(`http://localhost:5000/dashboard/${whom}`, {
        userId: JSON.parse(window.localStorage.getItem("whom")).username,
      });
      if (whom === "admin") {
        const forAdminBox = [
          { "Total Owner": 59 },
          { "Total Tenant": 39 },
          { "Total Employee": 20 },
        ];
        forAdminBox[0]["Total Owner"] = res.data.totalowner;
        forAdminBox[2]["Total Employee"] = res.data.totalemployee;
        forAdminBox[1]["Total Tenant"] = res.data.totaltenant;
        setForBox(forAdminBox);
      }
      if (whom === "owner") {
        const forOwnerBox = [
          { "No of Emloyees": 5 },
          // { "Total Tenant": 4 },
          { "Total complaints": 2 },
        ];
        forOwnerBox[0]["No of Emloyees"] = res.data.totalemployee;
        // forOwnerBox[1]["Total Tenant"] = res.data.totaltenant;
        forOwnerBox[1]["Total complaints"] = res.data.totalcomplaint;
        setForBox(forOwnerBox);
      }
      if (whom === "employee") {
        const forEmployeeBox = [
          { "Total complaints": 31 },
          { Salary: "Rs. 20,0000" },
        ];
        forEmployeeBox[0]["Total complaints"] = res.data.totalcomplaint;
        forEmployeeBox[1].Salary = "Rs. " + res.data.salary;
        setForBox(forEmployeeBox);
      }
      if (whom === "tenant") {
        const forTenantBox = [
          { "tenant id": 12132 },
          { "Tenant Name": "Tharun" },
          { "Tenant age": 20 },
          { dob: "12-1-2002" },
          { "Room no": 123456 },
        ];
        forTenantBox[0]["tenant id"] = res.data[0].tenant_id;
        forTenantBox[1]["Tenant Name"] = res.data[0].name;
        forTenantBox[2]["Tenant age"] = res.data[0].age;
        forTenantBox[3].dob = res.data[0].dob;
        forTenantBox[4]["Room no"] = res.data[0].room_no;
        setForBox(forTenantBox);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBoxInfo();
  }, []);

  return (
    <div
      onClick={() => {
        if (hamActive === true) {
          hamHandler();
        }
      }}
      style={{
        filter: hamActive ? "blur(2px)" : "blur(0px)",
      }}
      className="w-screen"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 gap-5 p-10">
        {forBox &&
          forBox.map((ele, index) => {
            return (
              <div key={index + 1} className=" p-3 border-2 border-blue-500">
                <h1 className="font-bold text-xl text-center">
                  {Object.values(forBox[index])}
                </h1>
                <p className="font-bold text-center text-sm capitalize">
                  {Object.keys(forBox[index])}
                </p>
              </div>
            );
          })}
      </div>
      <div className="p-10 -mt-14">
        <div className="border-2 border-blue-500 p-5 ">
          <div>
            <h1 className="text-center font-semibold">
              Apartment Rules and Regulation
            </h1>
          </div>
          <ol className="list-[inherit] px-6 py-2">
            <li>Tenant shall keep premises in good condition.</li>
            <li>Tenant shall not interfere with other tenant's premises.</li>
            <li>Tenant shall pay rent promptly on the due date. </li>
            <li>
              Tenant shall not make any alterations to the premises without
              written permission of the landlord.
            </li>
            <li>
              Tenant shall keep proper liability, fire and/or other damage
              insurance on the contents of the premises leased.
            </li>
            <li>
              Tenants shall not receive a refund of the damage deposit until
              landlord is certain that the premises are free of damages upon the
              surrender of the premises.
            </li>
            <li>
              No tenant shall interfere in any manner with any portion either of
              the heating or lighting or other apparatus in or about the
              building.
            </li>
            <li>
              Automobiles must be kept within yellow lines of the parking lot
              areas.
            </li>
            <li>
              Sanitary napkins shall not be deposited in toilets but shall be
              wrapped and deposited with other waste matter and refuse.
            </li>
            <li>
              Tenant shall be responsible for closing of windows in his or her
              apartment during storms.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
