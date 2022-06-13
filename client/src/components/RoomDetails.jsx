import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomDetails(props) {
  const roomDetailsHeader = [
    "Room no",
    "Room Type",
    "Floor no",
    "Register no",
    "Block no",
    "Parking Slot",
  ];
  const roomDetailsRows = [
    {
      room_no: 1321,
      type: "1BHK",
      floor: 23,
      reg_no: 121,
      block_no: 2,
      parking_slot: "a-123",
    },
    {
      room_no: 1231,
      type: "2BHK",
      floor: 32,
      reg_no: 451,
      block_no: 1,
      parking_slot: "b-123",
    },
  ];

  const [roomRows, setRoomRows] = useState(roomDetailsRows);
  useEffect(() => {
    // console.log(props.userid);
    // window.localStorage.setItem("userId", JSON.stringify(props.userid));
    axios
      .post("http://localhost:5000/ownerroomdetails", {
        userId: JSON.parse(window.localStorage.getItem("whom")).username,
      })
      .then((res) => {
        // console.log(res.data);
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
                          {ele.room_no}
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
                          {ele.type}
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
                          {ele.floor}
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
                          {ele.reg_no}
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
                          {ele.block_no}
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
                          {ele.parking_slot}
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
