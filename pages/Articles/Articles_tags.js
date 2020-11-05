import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ArticlesCards from "./Articles_cards.js";

const getArticle = (url) => {
  if (url === "images") {
    return [null, null];
  } else {
    return fetch("/api/articles/" + url)
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        return [res, url];
      })
      .catch((err) => {
        console.log(err);
        return [null, null];
      });
  }
};

const articleCard = (articleText, activeTags, tagsState) => {
  let flag = true;
  const activeCategories = activeTags.filter((obj) => obj.active);

  if (activeCategories.length === 0) {
    return (
      <div class="card">
        <div class="card-body">
          <h7 class="card-title">{articleText[1]}</h7>
        </div>
      </div>
    );
  } else {
    activeCategories.forEach((obj) => {
      if (!(tagsState[obj.name].indexOf(articleText[1]) > -1)) {
        flag = false;
      }
    });

    if (flag) {
      return (
        <div class="card">
          <div class="card-body">
            <h7 class="card-title">{articleText[1]}</h7>
          </div>
        </div>
      );
    }
  }
};

const ArticlesCards = ({ articleURL, activeTags }) => {
  const [articleState, updateArticleState] = useState(["articles loading..."]);
  const [tagsState, updateTags] = useState([]);

  // Retrieves the list of items from the Express app
  useEffect(() => {
    Promise.all(articleURL.map(getArticle))
      .then((proRes) => {
        updateArticleState(proRes);
      })
      .then(() => {
        fetch("tags.json")
          .then((tags) => {
            return tags.json();
          })
          .then((tags) => {
            updateTags(tags);
          });
      });
  }, [articleURL, activeTags]);

  return (
    <div class="row">
      <div class="col-10 rounded">{articleState.map((article) => articleCard(article, activeTags, tagsState))}</div>
    </div>
  );
};

const getTags = async (callback) => {
  const result = await fetch("\/tags.json").then((res) => res.json());

  let keysArray = Object.keys(result);
  let finalKeys = []

  keysArray.forEach((key) => {
    if(result[key].length > 0){
      finalKeys.push(key)
    }
  });

  callback(
    finalKeys.map((key) => {
      return {
        name: key,
        active: false,
      };
    }),
  );
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
