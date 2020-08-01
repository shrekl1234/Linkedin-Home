import React from "react";
import "./page-component.styles.css";
import Profile from "./profile/profile.component";
import Posts from "./posts/posts.component";
import KeepInTouch from "./keep-in-touch/keep-in-touch.component";
function Page() {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-md-3 col-sm-1">
            <Profile />
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-10">
            <Posts />
          </div>
          <div className="col col-lg-3 col-md-3 col-sm-1">
            <KeepInTouch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
