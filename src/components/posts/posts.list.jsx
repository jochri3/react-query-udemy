import React from "react";
import PostItem from "./posts.item";
import Loader from "../loader/loader";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "../error/error";

export default function PostsList({ posts }) {
   const { data, isLoading, isError, error, status, isFetching } = useQuery(
     "posts",
     () =>
       axios
         .get("https://posts-resource.herokuapp.com/api/posts")
         .then((res) => res.data.data),
     {
       refetchOnWindowFocus: false,
       staleTime: 1000,
     }
   );
 

   const displayPosts = () => {
     if (isLoading) return <Loader />;
     else if (isFetching) return <Loader message={"Updating..."} />;
     else if (isError) return <Error message={error.response.data.message} />;
     else return <>{data.map((post) => <PostItem key={post.id} {...post} />)}</>;
   };
  return (
    <>
      {/* <h3 className="heading-primary">Liste des posts</h3> */}
      <ul className="collection">{displayPosts()}</ul>
    </>
  );
}
