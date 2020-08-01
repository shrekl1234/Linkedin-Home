import React from "react";
import "./posts.styles.css";
import NewPost from "./new-post/new-post.component";
import PostedPost from './posted-post/posted-post.component';
import Comment from './posted-post/comment.component';
function Posts() {
  const [newPostAction, setNewPostAction] = React.useState("Share An Update");
  return (
    <div className="post">
      <NewPost
        newPostAction={newPostAction}
        setNewPostAction={setNewPostAction}
      />
      <br />
      <PostedPost
        name="XYZ"
        designation="PQR"
        time="10 min"
        commentText="Bharat Mata ki Jai"
      />
      <br />

      <PostedPost
        name="PQR"
        designation="asd"
        time="10 min"
        commentText="Bharat Mata ki Jai"
      />
      <br />

      <PostedPost
        name="GD"
        designation="PQSHGVR"
        time="10 min"
        commentText="Bharat Mata ki Jai"
      />
      <br />

      <PostedPost
        name="ASDF"
        designation="PQR"
        time="10 min"
        commentText="Bharat Mata ki Jai"
      />
    </div>
  );
}

export default Posts;
