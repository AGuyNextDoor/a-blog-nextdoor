import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import moment from "moment";

// import ArticlesCards from "./Articles_cards.js";

const getArticle = (url) => {
  if(url === ""){
    return [null, null]
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

  let topicTrimmed = articleText[1].split(".").slice(0, -1).join(".");
  topicTrimmed = topicTrimmed.replace(/_/g, " ");
  topicTrimmed = topicTrimmed.replace(/-/g, " ");

  if (activeCategories.length === 0) {
    return (
      <>
          <Link href={"/Articles/" + articleText[1]}>
        <div className="pb-2 col paper-top m-3 card_pile">
            <>
              <p className="card_title text-monospace font-weight-bold text-monospace text-capitalize">
                {topicTrimmed}
              </p>
              {/* <p>Creation: <text className="text-monospace">{creationDate}</text></p> */}
            </>
        </div>
          </Link>
        <br />
      </>
    );
  } else {
    activeCategories.forEach((obj) => {
      if (!(tagsState[obj.name].indexOf(articleText[1]) > -1)) {
        flag = false;
      }
    });

    if (flag) {
      return (
        <>
            <Link href={"/Articles/" + articleText[1]}>
          <div className="pb-2 col paper-top m-3 card_pile">
              <>
                <p className="card_title text-monospace font-weight-bold text-monospace text-capitalize">
                  {topicTrimmed}
                </p>
                {/* <p>Creation: <text className="text-monospace">{creationDate}</text></p> */}
                {/* <p>Last Modification: {modificationDate}</p> */}
              </>
          </div>
            </Link>
          <br />
        </>
      );
    }
  }
};

const ArticlesCards = ({ articleURL, articleDates, articleMods, activeTags }) => {
  const [articleState, updateArticleState] = useState(["articles loading..."]);
  const [tagsState, updateTags] = useState([]);

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
    <div className="album pt-4 pb-5 text-center d-flex justify-content-center container-fluid article_flex">
      <div className="justify-content-center row">
        {articleState.map((article, index) =>
          articleCard(
            article,
            activeTags,
            tagsState,
            moment(articleDates[index]).format("DD/MM/YYYY"),
            moment(articleMods[index]).format("DD/MM/YYYY"),
          ),
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
        className="text-monospace mx-2 active tag_background rounded mr-2"
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
        className="text-monospace mx-2 rounded mr-2"
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
      <div className="">
        <div>
          <div className="col-10 mt-5" data-toggle="buttons-radio" aria-label="Article Tags">
            <div className="d-flex justify-content-center my-3 mx-3">
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
