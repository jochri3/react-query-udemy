import { useQuery } from "react-query";
import axios from "axios";

export default function(queryKey){
    return useQuery(
      queryKey,
      () =>
        axios
          .get("https://posts-resource.herokuapp.com/api/posts")
          .then((res) => res.data.data),
      {
        refetchOnWindowFocus: false,
        staleTime: 1000,
        cacheTime: 6000,
      }
    );
}