import React from "react";
import "./posts.scss";

function IdContainer({ id }) {
  return (
    <div className="parent-circle">
      <span className="number">{id}</span>
    </div>
  );
}

export default function PostItem({ id, content, title }) {
  return (
    <li className="collection-item avatar">
      <IdContainer id={id} />
      <span className="title">{title}</span>
      <p className="content">{content}</p>
    </li>
  );
}
