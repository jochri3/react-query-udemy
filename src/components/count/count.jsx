import React from "react";
import usePosts from "../../hooks/usePosts";
import "./count.scss";


export default function Count({ queryKey }) {
  const { data } = usePosts(queryKey);
  return <h3 className="results">{data?.length} results</h3>;
}
