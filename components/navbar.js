import { match } from "assert";
import React from "react";
import { useRouter } from "next/router"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from "next/link";
import allTopics from "../allTopics.js";

const Navbar = ({children}) => {
  const location = useRouter();

  const linkGenerator = (topicName, path) => {
    let className = "nav-item nav-link";

    if (path.pathname.includes(topicName)) {
      className = "nav-item nav-link shadow rounded";
    }
    return (
      <li class={className}>
        <Link class={className} key={{ pathname: "/" + topicName, state: "plop" }} href={`/${topicName}`}>
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
        <Link class="" href="/">
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
