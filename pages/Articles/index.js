import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import ArticlesTags from "../../components/Articles_tags.js";
import { useRouter } from "next/router";
import Image from "next/image"

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
    <div id="article_body" className="App justif-content-center">
      {location.pathname.length < 10 ? (
        <div>
          <ArticlesTags articleURL={listState[0]} articleDates={listState[1]} articleMods={listState[2]}/>
        </div>
      ) : (
        <div></div>
      )}
      <div className="text-center">
        <Image className="rounded mx-auto d-block" width="990" height="500" src="/api/articles/images/wcArticles.png" alt=""/>
        <div>This word cloud is generated from all of the articles published filtered by the <a href="https://amueller.github.io/word_cloud/">wordcloud package</a>.</div>
      </div>
    </div>
  );
};

export default Articles;
