import { match } from "assert";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import allTopics from "../allTopics.js";

const Navbar = ({ match, location }) => {
  const linkGenerator = (topicName, path) => {
    let className = "nav-link";

    if (path.pathname.includes(topicName)) {
      className = "nav-link nav-link-active active";
    }
    return (
      <li class="nav-item">
        <Link class={className} to={{ pathname: "/" + topicName, state: "plop" }} href={topicName}>
          {topicName}
        </Link>
      </li>
    );
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-md navbar-light flex-md-nowrap fixed-top"
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
          data-target=".navbar-collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">{allTopics.map((topicName) => linkGenerator(topicName, location))}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
