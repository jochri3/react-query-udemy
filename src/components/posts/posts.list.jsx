import React from "react";
import PostItem from "./posts.item";

export default function PostsList({ posts }) {
  return (
    <>
      <h3 className="heading-primary">Liste des posts</h3>
      <ol className="list">
        <PostItem />
        <PostItem />
        <PostItem />
      </ol>
    </>
  );
}
