import axios from "axios";
import React, { useState, useEffect } from "react";

function ParkingSlot(props) {
  const allotedSlots = [
    { parking_slot: "A-123" },
    { parking_slot: "B-2131" },
    { parking_slot: "C-12312" },
  ];
  const [parkingSlot, setParkingSlot] = useState(allotedSlots);
  useEffect(() => {
    axios
      .post("http://192.168.137.69:5000/viewparking", {
        userId: JSON.parse(localStorage.getItem("whom")).username,
      })
      .then((res) => {
        console.log("Parking slot", res.data);
        setParkingSlot(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <h1 className="ml-2 text-lg my-2 font-bold">Parking Slot</h1>
      </div>
      <div className="flex">
        {parkingSlot.map((ele, index) => {
          console.log(ele);
          return (
            <div key={index + 1} className="p-5 border-2 m-2">
              <h1 className="">Slot no</h1>
              <p className="">{ele.parking_slot}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ParkingSlot;
