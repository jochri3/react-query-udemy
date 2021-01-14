import React from "react";
import "./errors.scss";

export default function Error({ message }) {
  return <p className="error-message">{message}</p>;
}
