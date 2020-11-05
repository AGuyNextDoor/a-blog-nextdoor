import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import ArticlesTags from "./Articles_tags.js";
import { useRouter } from "next/router";
// import MathJax from "@matejmazur/react-mathjax";

const Articles = () => {
  const location = useRouter()

  const [listState, updateListState] = useState([]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("\/articlesURL.json")
    // .then()
    .then((res) => res.json())
    .then(result => {
      console.log(result.articles);
      updateListState(result.articles)
    })
      // .then((list) => updateListState(list));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      {location.pathname.length < 10 ? (
        <div>
          <ArticlesTags articleURL={listState} />
        </div>
      ) : (
        <div></div>
      )}

      {/* <Route path={`${process.env.URL + location.pathname}/:articleId`} component={Article} /> */}
    </div>
  );
};

export default Articles;
