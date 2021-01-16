import React from "react";
import "./loader.scss";

export default function Loader({ message }) {
  return <div className="loader">{message||"Loading..."}</div>;
}
