import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import moon from "../images/DarkMode/moon.svg";

const DarkModeToggle = () => {
  
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve initial state from cookies
    return Cookies.get("darkMode") === "true";
  });

  useEffect(() => {
    // Apply the saved mode to the <html> element
    const html = document.documentElement;
    if (darkMode) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    Cookies.set("darkMode", newMode, { expires: 7 }); // Save in a cookie
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      aria-label="Toggle Dark Mode"
    >
      <img src={moon} alt="moon icon" id="moon-icon"></img>
    </button>
  );
};

export default DarkModeToggle;
