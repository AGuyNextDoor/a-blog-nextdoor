import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import moment from "moment";

// import ArticlesCards from "./Articles_cards.js";

const getArticle = (url) => {
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
};

const articleCard = (articleText, activeTags, tagsState, creationDate, modificationDate) => {
  let flag = true;
  const activeCategories = activeTags.filter((obj) => obj.active);

  if (activeCategories.length === 0) {
    return (
      <div class="card">
        <div class="card-body">
          <h7 class="card-title">{articleText[1]}</h7>
          <p>Created date: {creationDate}</p>
          <p>Modified date: {modificationDate}</p>
          <Link href={"/Articles/" + articleText[1]}>
            <div class="btn btn-primary"> {"->"} </div>
          </Link>
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
        <Link href={"/Articles/" + articleText[1]}>
          <div class="card">
            <div class="card-body">
              <h7 class="card-title">{articleText[1]}</h7>
              <p>Created date: {creationDate}</p>
              <p>Modified date: {modificationDate}</p>
            </div>
          </div>
        </Link>
      );
    }
  }
};

const ArticlesCards = ({ articleURL, articleDates, articleMods, activeTags }) => {
  const [articleState, updateArticleState] = useState(["articles loading..."]);
  const [tagsState, updateTags] = useState([]);
  const [dates, setDates] = useState([[""],[""]])

  // Retrieves the list of items from the Express app
  useEffect(() => {
    Promise.all(articleURL.map(getArticle))
      .then((proRes) => {
        const re = /(?:\.([^.]+))?$/;
        let result = proRes.filter((folder) => {
          return re.exec(folder[1])[1]
        })
        updateArticleState(result);

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
      <div class="col-10 rounded">
        {articleState.map((article, index) => 
          articleCard(
            article,
            activeTags,
            tagsState,
            moment(articleDates[index]).format("dddd Do MMMM YYYY"),
            moment(articleMods[index]).format("dddd Do MMMM YYYY"),
          )
        )}
      </div>
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

const ArticleTags = ({ articleURL, articleDates, articleMods }) => {
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
        class="active btn-primary rounded mr-2"
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
        class="rounded mr-2"
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
      <div class="">
        <div>
          <div class="col-12 mb-3 mt-2" data-toggle="buttons-radio" aria-label="Article Tags">
            <div class="col-8 d-flex justify-content-between">
              <text class="align-self-start"> Tags : </text>
              {activatedTags.map((tag, index) => {
                return getButtons(tag, index);
              })}
            </div>
          </div>
        </div>
      </div>
      <ArticlesCards
        articleURL={articleURL}
        articleDates={articleDates}
        articleMods={articleMods}
        activeTags={activatedTags}
      />
    </>
  );
};

export default ArticleTags;
