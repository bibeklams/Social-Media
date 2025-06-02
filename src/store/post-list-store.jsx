import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  delete: () => {},
});
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Goto School",
    body: "Hi friends, I am going to School",
    reactions: 2,
    userId: "user-2",
    tags: ["vacation", "Mumbai"],
  },
  {
    id: "2",
    title: "Goto vacation",
    body: "Hi friends, I am going to vacation",
    reactions: 3,
    userId: "user-4",
    tags: ["vacation", "Mumbai"],
  },
];

const reducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, DEFAULT_POST_LIST);
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: 2,
        userId: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
