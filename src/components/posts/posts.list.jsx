import React from "react";
import PostItem from "./posts.item";

export default function PostsList({ posts }) {
  const listPosts = () => {
    return posts?.map((post) => <PostItem key={post.id} {...post} />);
  };
  return (
    <>
      {/* <h3 className="heading-primary">Liste des posts</h3> */}
      <ul className="collection">{listPosts()}</ul>
    </>
  );
}
