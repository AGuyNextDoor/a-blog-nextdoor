import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";

const Article = () => {
  const [articleState, updateArticleState] = useState();

  const match = {
    params: {
      articleId: 5,
    },
  };

  // Retrieves the list of items from the Express app
  let title = "Loading...";
  const getArticle = () => {
    fetch("/api/articles/" + match.params.articleId)
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

export default Article
