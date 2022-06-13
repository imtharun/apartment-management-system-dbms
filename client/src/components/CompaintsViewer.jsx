/* eslint-disable no-multi-str */
import axios from "axios";
import React, { useEffect, useState } from "react";

function CompaintsViewer(props) {
  const complaints = [
    {
      room_no: "14",
      complaints:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      room_no: "15",
      complaints:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
    {
      room_no: "16",
      complaints:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\
  harum soluta? Placeat odio magnam dignissimos repellendus quisquam et\
  quod officiis!",
    },
  ];
  const [comps, setComps] = useState(complaints);

  useEffect(() => {
    axios
      .get("http://192.168.137.69:5000/viewcomplaints")
      .then((res) => {
        // console.log(res.data);
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
              className="border-2 my-3 border-gray-300 p-5 flex  justify-evenly"
            >
              <div className="mx-3">
                <h1 className="font-semibold capitalize text-center">
                  Room No
                </h1>
                <h2 className="text-center">{ele.room_no}</h2>
              </div>
              <div className="mx-3">
                <h1 className="font-semibold capitalize text-center">
                  Complaints
                </h1>
                <h2 className="text-center"> {ele.complaints}</h2>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default CompaintsViewer;
