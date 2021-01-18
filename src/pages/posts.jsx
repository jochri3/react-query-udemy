import PostsList from "../components/posts/posts.list";
import TextInput from "../components/text-input/text-input";
import Count from "../components/count/count";
import { ReactQueryDevtools } from "react-query-devtools";

export default function Posts() {
  return (
    <div className="">
      <h1 className="heading-primary">All posts</h1>
      <TextInput />
      <Count queryKey={"posts"} />
      <PostsList queryKey={"posts"} />
      <ReactQueryDevtools />
    </div>
  );
}
