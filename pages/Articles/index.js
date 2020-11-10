import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import ArticlesTags from "../../components/Articles_tags.js";
import { useRouter } from "next/router";
// import MathJax from "@matejmazur/react-mathjax";

const Articles = () => {
  const location = useRouter()

  const [listState, updateListState] = useState([[""], [""], [""]]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("\/articlesURL.json")
    // .then()
    .then((res) => res.json())
    .then(result => {
      updateListState([result.articles, result.dates, result.mods])
    })
      // .then((list) => updateListState(list));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="article_body" className="App col-12 justif-content-center">
      {location.pathname.length < 10 ? (
        <div>
          <ArticlesTags articleURL={listState[0]} articleDates={listState[1]} articleMods={listState[2]}/>
        </div>
      ) : (
        <div></div>
      )}

      {/* <Route path={`${process.env.URL + location.pathname}/:articleId`} component={Article} /> */}
    </div>
  );
};

export default Articles;
