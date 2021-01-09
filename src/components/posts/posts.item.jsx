import React from "react";
import "./posts.scss";

export default function PostItem({id,content,title}) {
  return (
      <li className="item">
        <h5 className="headline">Title</h5>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          distinctio ad corporis, laboriosam unde provident, architecto tenetur
          ea odio debitis delectus explicabo eum obcaecati vitae facere iusto
          laborum consequuntur neque.
        </span>
      </li>
  );
}
