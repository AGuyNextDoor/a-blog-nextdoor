import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const getTags = async (callback) => {
  const result = await fetch("/api/getTags").then((res) => res.json());

  let keysArray = Object.keys(result);

  callback([...keysArray]);
};

const TagButtons = ({ tag, index }) => {
  const [buttonState, updateButtonState] = useState(false);

  const changeState = () => {
    updateButtonState(!buttonState);
  };

  useEffect(() => {
    updateButtonState(buttonState);
  }, []);

  return buttonState ? (
    <button
      type="button"
      name={"button:" + tag}
      onClick={() => {
        changeState();
      }}
      class="active btn-primary rounded "
    >
      {tag}
    </button>
  ) : (
    <button
      type="button"
      name={"button:" + tag}
      onClick={() => {
        changeState();
      }}
      class="rounded"
    >
      {tag}
    </button>
  );
};

const ArticleHome = ({ match }) => {
  const [articleState, updateArticleState] = useState(["tags loading..."]);

  // Retrieves the list of items from the Express app
  useEffect(() => {
    getTags(updateArticleState);
  }, [articleState]);

  return (
    <div class="row">
      <div class="col-12 rounded justify-content-around" data-toggle="buttons-radio" aria-label="Article Tags">
        {articleState.map((tag, index) => (
          <TagButtons tag={tag} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleHome;
