import React, { useState, useEffect, Component } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import showdown from "showdown";

const converter = new showdown.Converter();

const getArticle = (url) => {
  return fetch("/api/articles/"+url)
    .then(res => {
      return res.text()
    })
    .then(res => {
      return [res, url]
    })
    .catch((err) => {
      console.log(err);
      return null
    })
}

const articleCard = (articleText, activeTags, tagsState) => {
  let flag = true;
  const activeCategories = activeTags.filter(obj => obj.active)

  if(activeCategories.length === 0){
    return (
      <div class="card">
        <div class="card-body">
          <h7 class="card-title">{articleText[1]}</h7>
        </div>
      </div>
    );  
  } else {
    activeCategories.forEach(obj => {
      if(!(tagsState[obj.name].indexOf(articleText[1]) > -1)){
        flag = false
      }
    })

    if(flag){
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

const ArticlesCard = ({ articleURL, activeTags }) => {
  const location = useRouter();
  const [articleState, updateArticleState] = useState(["articles loading..."]);
  const [tagsState, updateTags] = useState([])

  // Retrieves the list of items from the Express app
  useEffect(() => {
    Promise.all(articleURL.map(getArticle)).then((proRes) => {
      updateArticleState(proRes);
    }).then(() => {
      fetch("tags.json")
        .then((tags) => {
          return tags.json()
        })
        .then((tags) => {
          updateTags(tags);
        });
    })
  }, [articleURL, activeTags]);

  return (
    <div class="row">
      <div class="col-10 rounded">{articleState.map((article) => articleCard(article, activeTags, tagsState))}</div>
    </div>
  );
};

export default ArticlesCard;
