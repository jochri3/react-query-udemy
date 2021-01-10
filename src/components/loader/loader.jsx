import React from "react";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      Loading<span className="1st-dot">.</span>
      <span className="2nd-dot">.</span>
      <span className="3rd-dot">.</span>
    </div>
  );
}
