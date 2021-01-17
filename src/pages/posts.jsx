import { useState } from "react";
import PostsList from "../components/posts/posts.list";
import TextInput from "../components/text-input/text-input";
import Count from "../components/count/count";
import Button from "../components/button/button";
import { ReactQueryDevtools } from "react-query-devtools";

export default function Posts() {
  // const [show,toggle]=useState(true);
  return (
    <div className="">
      <h1 className="heading-primary">All posts</h1>
      <TextInput />
      <Count />
      {/* <Button label={show?"Hide":"Show"} handleClick={()=>toggle(!show)} /> */}
      {/* {show?<PostsList />:null} */}
      <PostsList queryKey={"posts1"} />
      <PostsList queryKey={"posts1"} />
      <ReactQueryDevtools />
    </div>
  );
}
