import { Post } from "./post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
export const Postlist = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
