import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import MathJax from "@matejmazur/react-mathjax";

const Articles = ({ match, location }) => {
  const [listState, updateListState] = useState([]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("/api/getArticles")
      .then((res) => res.json())
      .then((list) => updateListState(list));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      {location.pathname.length < 10 ? (
        <div>
          <ul>
            <li>Choose your article on the sidebar</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      <Route path={`${match.url}/:articleId`} component={Article} />
    </div>
  );
};

const Article = ({ match }) => {
  const [articleState, updateArticleState] = useState();

  // Retrieves the list of items from the Express app
  let title = "Loading...";
  const getArticle = () => {
    fetch("/api/getArticle/" + match.params.articleId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        title = match.params.articleId;
        updateArticleState(data[1]);
      });
  };

  useEffect(() => {
    getArticle();
  }, [articleState, title, match.params.articleId]);

  getArticle();

  return (
    <div>
      {articleState ? (
        <div>
          {/* <div dangerouslySetInnerHTML={{ __html: articleState }} /> */}
          {ReactHtmlParser(articleState)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Articles;
