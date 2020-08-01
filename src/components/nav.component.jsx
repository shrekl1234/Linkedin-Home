import React from "react";

function Nav() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          <i className="fab fa-linkedin fa-2x" style={{ color: "#0077B5" }}></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav">
            <li className="nav-item dropdown active">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong>Discover</strong>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Discover 1
                </a>
                <a className="dropdown-item" href="#">
                  Discover 2
                </a>
                <a className="dropdown-item" href="#">
                  Discover 3
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline mx-auto ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                className="form-control bg-white border-left-0 border-md "
                type="text"
                placeholder="Search Linkedin"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Nav;
