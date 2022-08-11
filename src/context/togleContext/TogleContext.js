import React, { createContext } from "react";
import { useState } from "react";

export const ToggleConten = createContext();

export default function TogleContext({ children }) {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  // console.log(toggleState);

  return (
    <ToggleConten.Provider value={{ toggleState, toggle }}>
      {children}
    </ToggleConten.Provider>
  );
}
