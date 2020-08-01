import React from "react";
import "./posted-post.styles.css";
import Comment from "./comment.component";

function PostedPost({name, designation, time, commentText}) {

    function handleClick(){
    
        document.getElementById("heart").style.color = "red";
    }
  return (
    <div className="postedPost">
      <div className="container  p-3">
        <div className="row">
          {/* porfili detail */}
          <div className="col col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div
                className="col col-lg-2 col-sm-2 col-md-2  postProfilePicture"
                style={{ textAlign: "center" }}
              >
                <i class="far fa-user-circle fa-3x"></i>
              </div>
              <div className="col col-lg-7 col-md-7 pl-0 col-sm-7">
                <h6 className="postName">{name}</h6>
                <p className="postDesignation postColorZrey">{designation}</p>
              </div>
              <div
                className="col col-lg-3 col-md-3 col-sm-6 pt-3 postTime"
                style={{ textAlign: "right" }}
              >
                <span className="postColorZrey">{time}</span>
              </div>
            </div>
          </div>
          {/* post text */}
          <div className="col col-lg-12 col-md-12 col-sm-12 pb-1 my-3 postText postColorZrey">
            {commentText}
          </div>
          {/* like cmnt share */}
          <div className="col col-lg-12 col-md-12 col-sm-12 likeCmntShare">
            <div className="row" style={{ textAlign: "center" }}>
              <div
                className="col col-lg-4 col-md-4 col-sm-4 "
                onClick={handleClick}
              >
                <i class="far fa-heart postColorZrey" id="heart"></i>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-4">
                <i class="far fa-comment postColorZrey"></i>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-4">
                <i class="fas fa-share-alt postColorZrey"></i>
              </div>
            </div>
          </div>
        </div>
        {/* cmnt section */}
        <Comment
          name="Shreyansh Kumar Lal"
          comment="I love Coding!!!!!!!!"
          time="5 min ago"
        />
        <hr />
        <div className="row p-3">
          <div className="col col-lg-12 col-md-12 col-sm-12 input-group">
            <input
              type="text"
              placeholder="Add a Comment"
              className="form-control form-secondary addComment"
              ariaLabel="Sizing example input"
              ariaDescribedby="inputGroup-sizing-default"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostedPost;
