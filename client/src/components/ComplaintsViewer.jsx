import React from "react";

function CompaintsViewer(props) {
  return (
    <div className="p-5">
      {props.complaints.map((ele, index) => {
        return (
          <div key={index + 1} className="border-2 my-3 border-gray-300 p-5">
            <h4 className="font-semibold">
              {Object.keys(props.complaints[index])}
            </h4>
            <p className="">{Object.values(props.complaints[index])}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CompaintsViewer;
