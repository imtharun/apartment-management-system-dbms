import React, { useState } from "react";

export const HamContext = React.createContext();

function HamContextProvider(props) {
  const [hamActive, setHamActive] = useState(false);

  const hamHandler = function () {
    setHamActive((prev) => !prev);
  };

  return (
    <HamContext.Provider value={{ hamActive, hamHandler }}>
      {props.children}
    </HamContext.Provider>
  );
}

export default HamContextProvider;
