import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import DefinitionsTags from "../../components/Definitions_tags.js";
import { useRouter } from "next/router";
import showdown from "showdown";

const converter = new showdown.Converter();

const Definitions = () => {
  const location = useRouter()

  const [listState, updateListState] = useState([[[]], [[]], [[]]]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("\/definitions.json")
    // .then()
    .then((res) => res.json())
    // .then(result => {
    //   updateListState([result.articles, result.dates, result.mods])
    // })
      .then((list) => {
        const tags = Object.keys(list)
        let words = []
        tags.forEach(tag => {
          words = [...words, Object.keys(list[tag])]
        })

        let wordsAndDefinitions = []
        words.forEach((listWords, indexWords) => {
          wordsAndDefinitions = [...wordsAndDefinitions, listWords.map( word => {
            return [word, converter.makeHtml(list[tags[indexWords]][word])]
          })];
        })

        console.log({wordsAndDefinitions});
        updateListState([tags, wordsAndDefinitions, list])
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="article_body" className="App justif-content-center">
      {location.pathname.length < 15 ? (
        <div>
          <DefinitionsTags tags={listState[0]} words={listState[1]} list={listState[2]} />
        </div>
      ) : (
        <div></div>
      )}
      {/* <Route path={`${process.env.URL + location.pathname}/:articleId`} component={Article} /> */}
    </div>
  );
};

export default Definitions;
