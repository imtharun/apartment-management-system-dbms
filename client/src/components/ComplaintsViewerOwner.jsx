/* eslint-disable no-multi-str */
import axios from "axios";
import React, { useEffect, useState } from "react";

function CompaintsViewer(props) {
  const complaints = [
    {
      complaints1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      compalints2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      complaints3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
  ];
  const [comps, setComps] = useState(complaints);

  useEffect(() => {
    axios
      .post("http://192.168.137.69:5000/ownercomplaints", {
        userId: JSON.parse(localStorage.getItem("whom")).username,
      })
      .then((res) => {
        console.log(res.data);
        setComps(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-5">
      {comps.map((ele, index) => {
        return (
          ele.complaints &&
          ele.room_no && (
            <div
              key={index + 1}
              className="border-2 my-3 border-gray-300 p-5 flex justify-evenly"
            >
              <div>
                <h1 className="font-semibold capitalize text-center">
                  Room No
                </h1>
                <p className="">{"Room no" + ele.room_no}</p>
              </div>
              <div>
                <h1 className="font-semibold capitalize text-center">
                  Complaints
                </h1>
                <p> {ele.complaints}</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default CompaintsViewer;
