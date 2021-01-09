import React from "react";
import PostsList from "../components/posts/posts.list";
import TextInput from "../components/text-input/text-input";
import Count from "../components/count/count";

export default function Posts() {
  return (
    <div>
      <h1 class='heading-primary'>All posts</h1>
      <TextInput />
      <Count />
      <PostsList />
    </div>
  );
}
