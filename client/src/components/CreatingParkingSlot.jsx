import axios from "axios";
import React, { useState, useRef } from "react";

function CreatingParkingSlot() {
  const vehicleEl = useRef(null);
  const slotNoEl = useRef(null);
  const [vehName, setVehName] = useState("");
  const [slotNo, setSlotNo] = useState("");
  
  const submitHandler = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/bookslot", {
        vehicleType: vehName,
        slotNo: slotNo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center min-h-screen font-mons">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-5 bg-white p-5 rounded-md shadow-lg">
          <div className="m-7">
            <form onSubmit={submitHandler} action="" method="POST" id="form">
              <div>
                <h1 className="text-center font-boldtext-gray-600 my-2">
                  Parking Slot
                </h1>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="vehicleType"
                  className="block mb-2  text-base text-gray-600 "
                >
                  Parking Vehicle Type
                </label>
                <input
                  type="text"
                  ref={vehicleEl}
                  value={vehName}
                  onChange={() => {
                    setVehName(vehicleEl.current.value);
                  }}
                  name="vehicleType"
                  id="vehicleType"
                  placeholder="Eg., Car, Bike.."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="pno"
                  className="text-base mb-2 block text-gray-600 "
                >
                  Parking Number
                </label>
                <input
                  type="text"
                  ref={slotNoEl}
                  value={slotNo}
                  onChange={() => {
                    setSlotNo(slotNoEl.current.value);
                  }}
                  name="pno"
                  id="pno"
                  placeholder="Enter Parking slot number"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-3  text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
                >
                  Book slot
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatingParkingSlot;
