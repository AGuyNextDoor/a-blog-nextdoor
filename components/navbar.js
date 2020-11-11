import { match } from "assert";
import React from "react";
import { useRouter } from "next/router"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from "next/link";
import allTopics from "../allTopics.js";

const Navbar = ({children}) => {
  const location = useRouter();

  const linkGenerator = (topicName, path) => {
    let className = "nav-item nav-link card_pile";

    if (path.pathname.includes(topicName)) {
      className = "nav-item nav-link card_pile text-dark font-weight-bold navbar_background navbar_shadow";
    }
    return (
      <li className={className} data-toggle="collapse" data-target=".navbar-collapse.show">
        <Link className={className} key={{ pathname: "/" + topicName, state: "plop" }} href={`/${topicName}`}>
          <div className="mx-2 cursor">{topicName}</div>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar_background flex-md-nowrap fixed-top"
        // style="position: fixed; top: 0;right: 0;left: 0;z-index: 1030;}"
      >
        <div className="navbar-brand second_color" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link to="/" href="/">
            <div className="navbar-brand card_pile font-weight-bold ">A Blog Nextdoor</div>
          </Link>
        </div>
        <button
          className="navbar-toggler navbar_shadow"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">{allTopics.map((topicName) => linkGenerator(topicName, location))}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
