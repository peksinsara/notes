import React from "react";
import "./Header.css";

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((handleToggleDarkMode) => !handleToggleDarkMode)
        }
      >
        Dark Mode
      </button>
    </div>
  );
}

export default Header;
