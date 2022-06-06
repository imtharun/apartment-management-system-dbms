import React from "react";

function Maintenance(props) {
  return (
    <section>
      <section className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 gap-5 p-10">
        {props.monthlyDetails &&
          props.monthlyDetails.map((ele, index) => {
            return (
              <div key={index + 1} className=" p-3 border-2 border-blue-500">
                <h1 className="font-bold text-xl text-center">
                  {Object.values(props.monthlyDetails[index])}
                </h1>
                <p className="font-bold text-center text-sm capitalize">
                  {Object.keys(props.monthlyDetails[index])}
                </p>
              </div>
            );
          })}
      </section>
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
                    {props.maintenanceRows.map((ele, index) => {
                      return (
                        <tr key={index + 1}>
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
                            {ele.Name}
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
                            {ele.flatNo}
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
                            {ele.mobileNumber}
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
                            {ele.status}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Maintenance;
