import React from "react";
import "./new-post.styles.css";

function NewPost({ newPostAction, setNewPostAction }) {
  return (
    <div className="newPost">
      <div
        className="jumbotron pt-2 pb-0 px-0 "
        style={{ backgroundColor: "white" }}
      >
        <div className="row py-3" style={{ textAlign: "center" }}>
          <div className="col col-lg-1 col-sm-1 col-md-1 "></div>
          <div
            className="col  col-sm-3 col-md-3 small-font hover border-zrey"
            onClick={() => setNewPostAction("Share An Update")}
            style={
              newPostAction === "Share An Update"
                ? {
                    border: "solid",
                    borderWidth: "0 0 2px 0",
                    borderColor: "#0077B5",
                  }
                : {}
            }
          >
            <a href="#" id="Share An Update">
              <i
                class="fas fa-pencil-alt"
                style={{ color: "#0077B5", position: "relative", right: "5px" }}
              ></i>
              <span style={{ fontSize: "13px" }}>Share An Update</span>
            </a>
          </div>
          <div
            className="col  col-sm-3 col-md-3 small-font hover border-zrey"
            onClick={() => setNewPostAction("Upload A Photo")}
            style={
              newPostAction === "Upload A Photo"
                ? {
                    border: "solid",
                    borderWidth: "0 0 2px 0",
                    borderColor: "#0077B5",
                  }
                : {}
            }
          >
            <a href="#" id="Upload A Photo">
              <i
                class="far fa-image"
                style={{ color: "orange", position: "relative", right: "5px" }}
              ></i>
              Upload A Photo
            </a>
          </div>
          <div
            className="col  col-sm-3 col-md-3 small-font hover border-zrey"
            onClick={() => setNewPostAction("Write An Article")}
            style={
              newPostAction === "Write An Article"
                ? {
                    border: "solid",
                    borderWidth: "0 0 2px 0",
                    borderColor: "#0077B5",
                  }
                : {}
            }
          >
            <a href="#" id="Write An Article">
              <i
                class="fas fa-book-open"
                style={{ color: "green", position: "relative", right: "5px" }}
              ></i>
              Write An Article
            </a>
          </div>
          <div className="col col-lg-1 col-sm-1 col-md-1 border-zrey"></div>
        </div>
      </div>
      <div className="row mb-3 pb-2">
        <span className="col-lg-1" />
        <input
          className="col-lg-10 inputText"
          type="text"
          placeholder="Write Something..."
        ></input>
        <span className="col-lg-1" />
      </div>
    </div>
  );
}

export default NewPost;
