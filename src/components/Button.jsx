import React from "react";
import "../index.css";

const Button = ({ color, variant }) => {
  let themeColor;
  switch (color) {
    case "success":
      themeColor = "blue-500";
      break;
    case "error":
      themeColor = "red-500";
      break;
    case "secondary":
      themeColor = "green-400";
      break;
    default:
      themeColor = "orange-400";
      break;
  }

  return (
    <button
      className={`p-3 font-sans ${
        variant === "outlined"
          ? `bg-transparent border-2 dark:text-gray-50 border-${themeColor} hover:bg-${themeColor} focus:bg-${themeColor}`
          : `bg-${themeColor} ring-offset-1 hover:ring-2 hover:ring-${themeColor} focus:ring-2 focus:ring-${themeColor}`
      }`}
    >
      Hello world
    </button>
  );
};

export default Button;
