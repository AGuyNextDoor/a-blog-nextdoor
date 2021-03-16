import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import DefinitionsTags from "../../components/Definitions_tags.js";
import { useRouter } from "next/router";
import showdown from "showdown";

const converter = new showdown.Converter();
// const data = import("../../public/definitions.csv")
// console.log({data});
const csvJSON = (csv) => {

  let lines=csv.split("\n");

  let result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  let headers=lines[0].split(";");

  for(let i=1;i<lines.length;i++){

      let obj = {};
      let currentline=lines[i].split(";");

      
      for(let j=0;j<headers.length;j++){
          if(headers[j]){
            obj[headers[j]] = currentline[j];
          }
      }

      result.push(obj);

  }

  return result; //JavaScript object
}

const Definitions = () => {
  const location = useRouter()

  const [listState, updateListState] = useState([[[]], [[]]]);

  // Retrieves the list of items from the Express app
  const getList = () => {
    fetch("\/Definitions.csv")
    .then(res => {
      return res.text()
    })
    .then((res) => {
      return csvJSON(res)
    })
    // .then(result => {
    //   updateListState([result.articles, result.dates, result.mods])
    // })
      .then((list) => {
        const items = Object.keys(list[0])

        const tags = items;

        updateListState([list, tags])
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="article_body" className="App justif-content-center">
      {location.pathname.length < 15 ? (
        <div>
          <DefinitionsTags words={listState[0]} tags={listState[1]}  />
        </div>
      ) : (
        <div></div>
      )}
      {/* <Route path={`${process.env.URL + location.pathname}/:articleId`} component={Article} /> */}
    </div>
  );
};

export default Definitions;