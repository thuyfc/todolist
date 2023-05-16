import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../style/dark-mode.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Helmet>
        <body className={isDarkMode ? "dark-mode" : ""} />
      </Helmet>
      <span onClick={handleToggle}>
        {isDarkMode ? (
          <LightModeIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
        ) : (
          <DarkModeIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
        )}
      </span>
    </>
  );
};

export default DarkModeToggle;
