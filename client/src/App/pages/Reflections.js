import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import path from "path";
import fs from "fs";

const Reflections = ({ match, location }) => {
  const [listState, updateListState] = useState([]);

  const getList = () => {
    fetch("/api/getArticles")
      .then((res) => res.json())
      .then((list) => updateListState(list));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <ul class="navbar-nav">
        {location.pathname.length < 13 ? (
          <div>
            <ul>
              <li>Choose your article on the sidebar</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </ul>
      <Route path={`${match.url}/:topicId`} component={Reflection} />
    </div>
  );
};

const Reflection = ({ match, location }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    {match.url}
  </div>
);

export default Reflections;
