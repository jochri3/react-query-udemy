import React from "react";
import "./text-input.scss";

export default function TextInput() {
  return (
    <div className="row">
      <div className="input-field col s6">
        <input id="input_text" type="text" data-length="10" />
        <label className="input_text--label" htmlFor="input_text">
          Search post
        </label>
        <i className="fas fa-search fa-2x"></i>
      </div>
    </div>
  );
}
