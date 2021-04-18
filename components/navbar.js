import { match } from "assert";
import React from "react";
import { useRouter } from "next/router"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from "next/link";
import allTopics from "../allTopics.js";
import Header from "./header.js"

const Navbar = ({children}) => {
  const location = useRouter();

  const linkGenerator = (topicName, path) => {
    let className = "nav-item nav-link card_pile";
    let hrefText = topicName

    if (path.pathname.includes(topicName)) {
      className = "nav-item nav-link card_pile text-dark font-weight-bold navbar_background navbar_shadow";
    }

    if(topicName === "Turing_Judges"){
      hrefText = hrefText + "/Home"
    }
    return (
      <li className={className} data-toggle="collapse" data-target=".navbar-collapse.show">
        <Link className={className} key={{ pathname: "/" + topicName, state: "plop" }} href={`/${hrefText}`}>
          <div className="mx-2 cursor">{topicName}</div>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar_background fixed-top row">
        <div className="ml-2 navbar-brand second_color order-first" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link to="/" href="/">
            <div className="navbar-brand card_pile font-weight-bold ">A Blog Nextdoor</div>
          </Link>
        </div>
        <button
          // id="navbar-collapse-button"
          className="navbar-toggler navbar_shadow order-10 mr-2"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-8 order-10" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {allTopics.map((topicName) => linkGenerator(topicName, location))}
          </ul>
        </div>
        <div id="navbar-header" className="order-11 mr-1">
          <Header />
        </div>
        {/* <a className="d-flex flex-row-reverse-large">

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {allTopics.map((topicName) => linkGenerator(topicName, location))}
            </ul>
          </div>
          <a className="d-flex flex-row-reverse-small">

            <Header></Header>
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
          </a>
        </a> */}
      </nav>
    </div>
  );
};

export default Navbar;
