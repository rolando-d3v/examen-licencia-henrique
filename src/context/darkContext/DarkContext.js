import React, { createContext, useEffect, useState } from "react";

export const DarkContext = createContext();

export default function DarkContextProvider({ children }) {
    //setTheme para poner temas dark en localstore
    const [theme, setTheme] = useState("light");
    //setToggleBoolean para poner temas dark en false o true
  const [toggleBoolean, setToggleBoolean] = useState(false);

  //toggle de buttom
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleBoolean(true);
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      setToggleBoolean(false);
      localStorage.setItem("theme", "light");
    }
  };

  //efect recarga del localstorage  useDarkMode
  useEffect(() => {
    let toggleBoolean = localStorage.getItem("theme");
    if (toggleBoolean === "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setToggleBoolean(true);
    }
  }, []);

  return (
    <DarkContext.Provider value={{ toggleBoolean, toggleTheme }}>
      {children}
    </DarkContext.Provider>
  );
}
