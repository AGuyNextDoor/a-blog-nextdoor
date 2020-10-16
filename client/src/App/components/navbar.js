import { match } from "assert";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import allTopics from "../allTopics.js";

const Navbar = ({ match }) => {
  const linkGenerator = (topicName) => {
    return (
      <li class="nav-item">
        <Link class="nav-link" to={{ pathname: "/" + topicName, state: "plop" }} href={topicName}>
          {topicName}
        </Link>
      </li>
    );
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-sm navbar-light flex-md-nowrap fixed-top"
        // style="position: fixed; top: 0;right: 0;left: 0;z-index: 1030;}"
      >
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
          <ul class="navbar-nav">{allTopics.map(linkGenerator)}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
