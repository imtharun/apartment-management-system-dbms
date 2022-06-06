import React, { useContext } from "react";
import { HamContext } from "../HamContextProvider";

function Dashboard(props) {
  const { hamActive } = useContext(HamContext);

  return (
    <div
      style={{
        filter: hamActive ? "blur(2px)" : "blur(0px)",
      }}
      className="w-screen"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 gap-5 p-10">
        {props.forBox &&
          props.forBox.map((ele, index) => {
            return (
              <div key={index + 1} className=" p-3 border-2 border-blue-500">
                <h1 className="font-bold text-xl text-center">
                  {Object.values(props.forBox[index])}
                </h1> 
                <p className="font-bold text-center text-sm capitalize">
                  {Object.keys(props.forBox[index])}
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
