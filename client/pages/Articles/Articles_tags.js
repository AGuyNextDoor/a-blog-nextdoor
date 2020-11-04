import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticlesCards from "./Articles_cards.js";

const getTags = async (callback) => {
  const result = await fetch("/tags.json").then((res) => res.json());

  let keysArray = Object.keys(result);

  callback(keysArray.map((key) => {
    return {
      name: key,
      active: false
    };
  }))
};

const ArticleTags = ({ articleURL }) => {
  const [activatedTags, setActivatedTags] = useState([{name : "tags loading...", active : false}]);

  const changeState = (tag, index) => {
    const array = [...activatedTags];
    // tag.active = !tag.active;
    array[index] = { name: tag.name, active: !tag.active };
    setActivatedTags(array);
  };

  const getButtons = (tag, index) => {
    return tag.active ? (
      <button
        type="button"
        name={"button:" + tag.name}
        onClick={() => {
          changeState(tag, index);
        }}
        class="active btn-primary rounded "
      >
        {tag.name}
      </button>
    ) : (
      <button
        type="button"
        name={"button:" + tag.name}
        onClick={() => {
          changeState(tag, index);
        }}
        class="rounded"
      >
        {tag.name}
      </button>
    );
  };

  // Retrieves the list of items from the Express app
  useEffect(() => {
    getTags(setActivatedTags);
  }, [articleURL]);

  return (
    <>
      <div class="row">
        <div
          class="col-12 mb-3 mt-2 rounded justify-content-around"
          data-toggle="buttons-radio"
          aria-label="Article Tags"
        >
          {activatedTags.map((tag, index) => {
            return getButtons(tag, index)
          })}
        </div>
      </div>
      <ArticlesCards articleURL={articleURL} activeTags={activatedTags} />
    </>
  );
};

export default ArticleTags;
