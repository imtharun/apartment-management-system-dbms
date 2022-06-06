import axios from "axios";
import React, { useState, useRef } from "react";

function RaisingComplaints() {
  const nameEl = useRef(null);
  const floorEl = useRef(null);
  const descpEl = useRef(null);

  const [name, setName] = useState("");
  const [floorno, setFloorno] = useState("");
  const [descp, setDescp] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/raisingcomplaint", {
        name: name,
        floorno: floorno,
        descp: descp,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="min-h-screen md:px-20">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
            Add Complaint
          </h1>
          <div>
            <label
              htmlFor="name"
              className="text-base text-gray-500 font-semibold font-serif"
            >
              Name:
            </label>
            <input
              ref={nameEl}
              type="text"
              value={name}
              onChange={() => {
                setName(nameEl.current.value);
              }}
              placeholder="name"
              id="name"
              className="ml-6 my-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="floorno"
              className="my-2 font-semibold text-gray-500 text-lx font-serif"
            >
              Floor no:
            </label>
            <input
              ref={floorEl}
              type="text"
              value={floorno}
              onChange={() => {
                setFloorno(floorEl.current.value);
              }}
              placeholder="Floor no"
              id="floor no"
              className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="description"
              className="block text-base text-gray-500 font-semibold my-2 font-serif"
            >
              Description:
            </label>
            <textarea
              ref={descpEl}
              id="description"
              onChange={() => {
                setDescp(descpEl.current.value);
              }}
              cols="30"
              rows="10"
              value={descp}
              placeholder="Write here.."
              className="w-full font-serif  border-2 p-4  outline-none rounded-md"
            ></textarea>
          </div>
          <button className="my-2 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition-all duration-200 bg-blue-500">
            Add Complaint
          </button>
        </div>
      </div>
    </form>
  );
}

export default RaisingComplaints;
