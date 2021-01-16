import PostsList from "../components/posts/posts.list";
import Error from "../components/error/error";
import TextInput from "../components/text-input/text-input";
import Count from "../components/count/count";
import Loader from "../components/loader/loader";
import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query-devtools";

export default function Posts() {
  const { data, isLoading, isError, error, status, isFetching } = useQuery(
    "posts",
    () =>
      axios
        .get("https://posts-resource.herokuapp.com/api/posts")
        .then((res) => res.data.data),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    }
  );
  const displayPosts = () => {
    if (isLoading) return <Loader />;
    else if (isFetching) return <Loader message={"Updating..."} />;
    else if (isError) return <Error message={error.response.data.message} />;
    else return <PostsList posts={data} />;
  };

  return (
    <div className="">
      <h1 className="heading-primary">All posts</h1>
      <TextInput />
      <Count />
      {displayPosts()}
      <ReactQueryDevtools />
    </div>
  );
}
