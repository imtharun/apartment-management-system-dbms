import axios from "axios";
import React, { useState } from "react";
// import { useEffect } from "react";

function PayMaintenance(props) {
  const [isPaid, setIsPaid] = useState(false);

  // useEffect()

  return (
    <section className="bg-white px-10 ">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-500 text-center">
                    {props.maintenanceHeader.map((ele, index) => {
                      return (
                        <th
                          key={index + 1}
                          className="
                          w-1/6
                          min-w-[160px]
                          text-lg
                          font-semibold
                          text-white
                          py-4
                          lg:py-7       
                          px-3
                          lg:px-4
                          border-l border-transparent
                          "
                        >
                          {ele}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* <tr> */}

                  <tr>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          bg-[#F3F6FF]
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {props.maintenanceRows.Name}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          bg-[#F3F6FF]
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {props.maintenanceRows.flatNo}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          bg-[#F3F6FF]
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {props.maintenanceRows.mobileNumber}
                    </td>
                    <td
                      className="
                          text-center text-dark
                          font-medium
                          text-base
                          py-5
                          px-2
                          bg-[#F3F6FF]
                          border-b border-l border-[#E8E8E8]
                          "
                    >
                      {!isPaid ? (
                        <button
                          className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
                          onClick={() => {
                            setIsPaid(!isPaid);
                            axios
                              .post("http://localpost:5000/userpaid", {
                                name: props.maintenanceRows.name,
                                status: "Paid",
                              })
                              .then((res) => {
                                console.log(res);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                        >
                          Pay
                        </button>
                      ) : (
                        <span className="px-6 py-2 border-2 border-transparent">
                          Paid
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayMaintenance;
