import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import showdown from "showdown";

const converter = new showdown.Converter();

const Article = () => {
  const [articleState, updateArticleState] = useState();

  const router = useRouter();
  let { article_name } = router.query;

  // Retrieves the list of items from the Express app
  let title = "Loading...";
  const getArticle = () => {
    if(!(article_name)){
      article_name = "introduction.md"
    } else {
      fetch("/api/articles/" + article_name)
      .then(at => {
        return at
      })
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          title = article_name;
          if(article_name.includes("md")){
            updateArticleState(converter.makeHtml(data));
          } else {
            updateArticleState(data);
          }
        });
      }
  };

  useEffect(() => {
    getArticle();
  }, [articleState, title, article_name]);

  getArticle();

  return (
    <div>
      {articleState ? (
        <div>
          {ReactHtmlParser(articleState)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Article
