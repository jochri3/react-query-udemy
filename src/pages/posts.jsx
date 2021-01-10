import PostsList from "../components/posts/posts.list";
import TextInput from "../components/text-input/text-input";
import Count from "../components/count/count";
import Loader from "../components/loader/loader";

export default function Posts() {
    const data=[
        {id:1,title:"blablabla",content:"Bliblibli"},
        {id:2,title:"tototo",content:"tititi"}
    ]
  return (
    <div className="">
      <h1 className="heading-primary">All posts</h1>
      <TextInput />
      <Count />
      <PostsList posts={data} />
    </div>
  );
}
