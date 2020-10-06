import React, { useState, useEffect, Component } from "react";
import Highlight from "react-highlight.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

// import Atom from "../articles/atom.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import marked from "marked";
import ReactMarkdown from "react-markdown";

const List = ({ match }) => {
  const [listState, updateListState] = useState([]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((list) => updateListState(list));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <h2>List of Items</h2>
      {/* Check to see if any items are found*/}
      {listState.length ? (
        <div>
          {/* Render the list of items */}
          <ul>
            {listState.map((articleName) => (
              <li>
                <Link to={`/article/${articleName}`}>{articleName}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* <Atom></Atom> */}

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
        console.log(data[1]);
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
          <div dangerouslySetInnerHTML={{ __html: articleState }} />
          {ReactHtmlParser(articleState)}
        </div>
      ) : (
        <div>{title}</div>
      )}
    </div>
  );
};

export default List;
