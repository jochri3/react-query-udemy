import React from "react";
import "./button.scss";

export default function Button({ label, handleClick }) {
  const handleBtnClick = (e) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <a onClick={handleBtnClick} href="" className="btn">
      {label}
    </a>
  );
}
