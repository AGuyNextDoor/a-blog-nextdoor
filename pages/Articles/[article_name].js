import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";

console.log("Articles");


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
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          title = article_name;
          updateArticleState(data[1]);
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
          {/* <div dangerouslySetInnerHTML={{ __html: articleState }} /> */}
          {ReactHtmlParser(articleState)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Article
