import React from "react";

function ParkingSlot(props) {
  return (
    <div>
      <div>
        <h1 className="ml-2 text-lg my-2 font-bold">Parking Slot</h1>
      </div>
      <div className="flex">
        {props.allotedSlots.map((ele, index) => {
          return (
            <div key={index + 1} className="p-5 border-2 m-2">
              <h1 className="">Slot no</h1>
              <p className="">{ele}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ParkingSlot;
