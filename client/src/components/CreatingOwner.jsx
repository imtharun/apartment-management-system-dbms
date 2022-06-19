import React, { useState, useRef } from "react";
import axios from "axios";

function CreatingUser() {
  const nameEl = useRef(null);
  const ageEl = useRef(null);
  const adhaarEl = useRef(null);
  const dobEl = useRef(null);
  const aggreeEl = useRef(null);
  const ownerEl = useRef(null);
  const roomEl = useRef(null);
  const passEl = useRef(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [dob, setDob] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [roomno, setRoomno] = useState("");
  const [pass, setPass] = useState("");
  const [aggrementStatus, setAggrementStatus] = useState("");

  const post = async () => {
    try {
      const res = await axios.post("http://localhost:5000/createowner", {
        name: name,
        age: age,
        ownerId: ownerId,
        adhaar: adhaar,
        roomno: roomno,
        password: pass,
        aggrementStatus: aggrementStatus,
        dob: dob,
      });
      if (res.status === 200) {
        nameEl.current.value = "";
        ageEl.current.value = "";
        adhaarEl.current.value = "";
        dobEl.current.value = "";
        ownerEl.current.value = "";
        aggreeEl.current.value = "";
        passEl.current.value = "";
        roomEl.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = function (e) {
    e.preventDefault();
    post();
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
            htmlFor="owner-id"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Owner Id
          </label>
          <input
            type="text"
            ref={ownerEl}
            name="owner-id"
            id="owner-id"
            value={ownerId}
            placeholder="Owner Id"
            onChange={() => {
              setOwnerId(ownerEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="room-no"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Room no
          </label>
          <input
            type="text"
            ref={roomEl}
            name="room-no"
            id="room-no"
            value={roomno}
            placeholder="Room no"
            onChange={() => {
              setRoomno(roomEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner-id"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Agreement Status
          </label>
          <input
            type="text"
            ref={aggreeEl}
            name="aggrementStatus"
            id="aggrementStatus"
            value={aggrementStatus}
            placeholder="Aggrement Status [Yes / no]"
            onChange={() => {
              setAggrementStatus(aggreeEl.current.value);
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
            htmlFor="pass"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Password
          </label>
          <input
            type="text"
            name="pass"
            ref={passEl}
            value={pass}
            onChange={() => {
              setPass(passEl.current.value);
            }}
            id="dob"
            placeholder="Enter your Password"
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

        <div className="flex w-full">
          <button className="mx-auto hover:shadow-form  py-3 px-8 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatingUser;
