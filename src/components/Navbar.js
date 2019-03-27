import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div>
              <h4 onClick="document.getElementById('Top').scrollIntoView();">E L I A S &nbsp; H A B A S H </h4>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="font-awesome"
                  href="https://www.linkedin.com/in/elias-habash-6bb7b711a/"
                >
                  {" "}
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="font-awesome"
                  href="https://github.com/elihabash23"
                >
                  {" "}
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="font-awesome"
                  href="https://www.facebook.com/elias.habash.1"
                >
                  {" "}
                  <i className="fab fa-facebook" />
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  {" "}
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">
                  {" "}
                  Resume
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
