import React, { useState } from "react";
// import axios from "axios";
import Header from "./components/Header";
// import Lorem from "./components/Lorem";
import Dashboard from "./components/Dashboard";

function App() {
  const [isHamClicked, setIsHamClicked] = useState(false);
  return (
    <div className="App ">
      <Header isHamClicked={isHamClicked} setIsHamClicked={setIsHamClicked} />
      <section
        
      >
        <Dashboard isHamClicked={isHamClicked} />
      </section>
    </div>
  );
}

export default App;
