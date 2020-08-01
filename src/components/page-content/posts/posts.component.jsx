import React from "react";
import "./posts.styles.css";
import NewPost from "./new-post/new-post.component";
function Posts() {
  const [newPostAction, setNewPostAction] = React.useState("Share An Update");
  return (
    <div className="post">
      <NewPost newPostAction = {newPostAction} setNewPostAction = {setNewPostAction}/>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
      <h1>Posts</h1>
    </div>
  );
}

export default Posts;
