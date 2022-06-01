import React, { useEffect } from "react";
import axios from "axios";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Lorem from "./components/Lorem";

function App() {
  // useEffect(() => {
  //   axios
  //     .post("/user", {
  //       firstName: "Fred",
  //       lastName: "Flintstone",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div className="App bg-gray-300 h-screen ">
      <Header />
      <section className="flex">
        <Aside />
        <Lorem />
      </section>
    </div>
  );
}

export default App;
