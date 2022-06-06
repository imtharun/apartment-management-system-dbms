import React, { useState, useRef } from "react";
import axios from "axios";

function CreatingUser() {
  const nameEl = useRef(null);
  const ageEl = useRef(null);
  const adhaarEl = useRef(null);
  const dobEl = useRef(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [dob, setDob] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createowner", {
        name: name,
        age: age,
        adhaar: adhaar,
        dob: dob,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={submitHandler} action="" method="POST">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            ref={nameEl}
            name="name"
            id="name"
            value={name}
            placeholder="Full Name"
            onChange={() => {
              setName(nameEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="age"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Age
          </label>
          <input
            type="age"
            name="age"
            ref={ageEl}
            id="age"
            value={age}
            onChange={() => {
              setAge(ageEl.current.value);
            }}
            placeholder="Age"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Adhaar"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Adhaar
          </label>
          <input
            type="text"
            ref={adhaarEl}
            value={adhaar}
            onChange={() => {
              setAdhaar(adhaarEl.current.value);
            }}
            name="Adhaar"
            id="Adhaar"
            placeholder="Enter your Adhaar"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dob"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            DOB
          </label>
          <input
            type="text"
            name="dob"
            ref={dobEl}
            value={dob}
            onChange={() => {
              setDob(dobEl.current.value);
            }}
            id="dob"
            placeholder="Enter your dob"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div>
          <button className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatingUser;
