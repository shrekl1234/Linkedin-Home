import React from "react";

function Comment({img="", name, comment, time}) {
  return (
    <div className="comment">
      <hr />
      <div className="row">
        <div
          className="col col-lg-2 col-md-2 col-sm-2 commentPicture"
          style={{ textAlign: "center" }}
        >
          <i class="far fa-user-circle fa-3x"></i>
        </div>
        <div
          className="col col-lg-8 col-md-8 col-sm-8 commentText"
          style={{ position: "relative", right: "20px" }}
        >
          <h6>{name}</h6>
          <p className="postColorZrey">{comment}</p>
        </div>
        <div
          className="col col-lg-2 col-md-2 col-sm-2 commentTime"
          style={{ position: "relative", right: "20px", top: "15px" }}
        >
          <span className="postColorZrey">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
