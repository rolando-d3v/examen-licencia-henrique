import React, { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [toggleBoolean, setToggleBoolean] = useState(false);

  const themeLight = {
    bgColor: "#2483a8",
    fColor: "#42424242",
  };

  const themeDark = {
    bgColor: "#10131a",
    fColor: "#fff",
  };

  //toggle de buttom 
  const toggle = () => {
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

  return { toggle, theme, toggleBoolean, themeLight, themeDark };
};
