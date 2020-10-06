import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light top-navbar bd-navbar">
        <Link class="" to="/">
          <a class="navbar-brand" to="/" href="#">
            A Blog Next Door
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/Reflections" href="Reflections">
                Reflections
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Article" href="Article">
                Article
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Drawings" href="Drawings">
                Drawings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
