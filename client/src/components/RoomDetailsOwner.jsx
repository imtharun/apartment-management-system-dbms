import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomDetails(props) {
  const roomDetailsHeader = [
    "Tenant id",
    "Name",
    "Age",
    "dob",
    "Status",
    "Room no",
  ];
  const roomDetailsRows = [
    {
      roomNo: 1321,
      roomType: "1BHK",
      floorNo: 23,
      registerNo: 121,
      blockNo: 2,
      parkingSlot: "a-123",
    },
    {
      roomNo: 1231,
      roomType: "2BHK",
      floorNo: 32,
      registerNo: 451,
      blockNo: 1,
      parkingSlot: "b-123",
    },
  ];

  const [roomRows, setRoomRows] = useState(roomDetailsRows);
  useEffect(() => {
    // console.log(props.userid);
    // window.localStorage.setItem("userId", JSON.stringify(props.userid));
    axios
      .post("http://192.168.137.69:5000/ownertenantdetails", {
        userId: JSON.parse(window.localStorage.getItem("whom")).username,
      })
      .then((res) => {
        console.log(res.data);
        setRoomRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="bg-white px-10 ">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-500 text-center">
                    {roomDetailsHeader.map((ele, index) => {
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
                  {roomRows.map((ele, index) => {
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
                          {ele.tenant_id}
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
                          {ele.name}
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
                          {ele.age}
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
                          {ele.dob}
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
                          {ele.stat}
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
                          {ele.room_no}
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
  );
}

export default RoomDetails;
