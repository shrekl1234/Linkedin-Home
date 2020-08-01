import React from "react";
import "./page-header.styles.css";
function PageHeader(props) {
  return (
    <div className="jumbotron pt-2 pb-0 px-0">
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-lg-2" />
        <div
          className="col col-lg-2 col-sm-3 col-md-3 pb-3 hover"
          onClick={() => props.setPageHeader("Posts")}
          style={
            props.pageHeader === "Posts"
              ? {
                  border: "solid",
                  borderWidth: "0 0 2px 0",
                  borderColor: "#0077B5",
                }
              : {}
          }
        >
          <a
            href="#"
            onClick={() => props.setPageHeader("Posts")}
            className="hover"
            id="Posts"
            style={props.pageHeader === "Posts" ? { color: "#311d3f" } : {}}
          >
            Posts
          </a>
        </div>
        <div
          className="col col-lg-2 col-sm-3 col-md-3 pb-3 hover"
          onClick={() => props.setPageHeader("Articles")}
          style={
            props.pageHeader === "Articles"
              ? {
                  border: "solid",
                  borderWidth: "0 0 2px 0",
                  borderColor: "#0077B5",
                }
              : {}
          }
        >
          <a
            href="#"
            onClick={() => props.setPageHeader("Articles")}
            className="hover"
            id="Articles"
            style={props.pageHeader === "Articles" ? { color: "#311d3f" } : {}}
          >
            Articles
          </a>
        </div>
        <div
          className="col col-lg-2 col-sm-3 col-md-3 pb-3 hover"
          onClick={() => props.setPageHeader("Companies")}
          style={
            props.pageHeader === "Companies"
              ? {
                  border: "solid",
                  borderWidth: "0 0 2px 0",
                  borderColor: "#0077B5",
                }
              : {}
          }
        >
          <a
            href="#"
            onClick={() => props.setPageHeader("Companies")}
            className="hover"
            id="Companies"
            style={props.pageHeader === "Companies" ? { color: "#311d3f" } : {}}
          >
            Companies
          </a>
        </div>
        <div
          className="col col-lg-2 col-sm-3 col-md-3 pb-3 hover"
          onClick={() => props.setPageHeader("Jobs")}
          style={
            props.pageHeader === "Jobs"
              ? {
                  border: "solid",
                  borderWidth: "0 0 2px 0",
                  borderColor: "#0077B5",
                }
              : {}
          }
        >
          <a
            href="#"
            onClick={() => props.setPageHeader("Jobs")}
            id="Jobs"
            className="hover"
            style={props.pageHeader === "Jobs" ? { color: "#311d3f" } : {}}
          >
            Jobs
          </a>
        </div>
        <div className="col-lg-2 " />
      </div>
    </div>
  );
}

export default PageHeader;
