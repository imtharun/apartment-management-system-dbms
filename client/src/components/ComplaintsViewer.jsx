/* eslint-disable no-multi-str */
import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintsViewer(props) {
  const [comps, setComps] = useState([]);

  const getComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/viewcomplaints");
      setComps(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComplaints();
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

export default ComplaintsViewer;
