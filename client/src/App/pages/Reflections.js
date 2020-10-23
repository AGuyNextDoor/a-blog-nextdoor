import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Reflections = ({ match, location }) => {
  const [listState, updateListState] = useState([]);

  const getList = () => {
    fetch("/api/getReflectionList")
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
      <Route path={`${match.url}/:reflectionId`} component={Reflection} />
    </div>
  );
};

const Reflection = ({ match }) => {
  const [reflectionState, updateReflectionState] = useState();

  // Retrieves the list of items from the Express app
  let title = "Loading...";
  const getReflection = () => {
    fetch("/api/getReflection/" + match.params.reflectionId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        title = match.params.reflectionId;
        updateReflectionState(data[1]);
      });
  };

  useEffect(() => {
    getReflection();
  }, [reflectionState, title, match.params.reflectionId]);

  getReflection();

  return (
    <div>
      {reflectionState ? (
        <div>
          {/* <div dangerouslySetInnerHTML={{ __html: reflectionState }} /> */}
          {ReactHtmlParser(reflectionState)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Reflections;
