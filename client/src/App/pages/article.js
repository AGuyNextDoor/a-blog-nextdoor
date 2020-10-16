import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import path from "path";
import fs from "fs";

const list = ["../articles/article_1.md"];

export const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export const Reflections = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li class="nav-item">
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li class="nav-item">
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Reflection} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
  </div>
);

const Reflection = ({ match, location }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    {match.url}
  </div>
);
