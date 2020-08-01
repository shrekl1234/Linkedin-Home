import React from "react";
import "./profile.styles.css";

function Profile() {
  return (
    <div className="profile p">
      <div className="container  border-zrey">
        <div className="row">
          {/* profile photos */}
          <div className="col col-lg-12 m-auto py-4 ">
            <i class="fas fa-user-circle fa-5x"></i>
          </div>
          <div className="col-lg-12 py-3 mb-2">
            {/* name & place */}
            <div className="col col-lg-12">
              <h5>Caroline Belfort</h5>
            </div>
            <div className="col col-lg-12">
              <span>Statton Oakmont</span>
            </div>
          </div>
        </div>
        <div className="row border-top">
          {/* Connections */}
          <div className="col col-lg-6  p-4">
            <h5>358</h5>
            <span style={{ position: "relative", right: "8px" }}>
              Connections
            </span>
          </div>
          {/* Views */}
          <div
            className="col col-lg-6 p-4"
            style={{ borderLeft: "#ced4da solid 1px" }}
          >
            <h5>25</h5>
            <span>Views</span>
          </div>
        </div>
        {/* view profile */}
        <div className="row border-top  py-2">
          <p className="col col-lg-12">
            <a href="#">
              <strong>View My Profile</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
