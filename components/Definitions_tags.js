import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

const createState = (callback, state) => {
  const array = state.map(element => {
    return {name: element, active : true}
  })

  callback(array)
}

const isTagActive = (activeTags, word) => {
  let flag = false;
  activeTags.forEach(tag => {
    if ((word["Category"] === tag.name) && !tag.active) {
      flag = true;
    }
  })

  return flag;
}

const numberOfTags = (tag, words) => {

  return words.filter(word => word.Category === tag.name).length

}

const DefinitionsTags = ({ words, tags }) => {
  const [activatedTags, setActivatedTags] = useState([{name : "tags loading...", active : false}]);

  const changeState = (tag, index) => {
    const array = [...activatedTags];
    // tag.active = !tag.active;
    array[index] = { name: tag.name, active: !tag.active };
    setActivatedTags(array);
  };

  const getButtons = (tag, index) => {
    const frequency = numberOfTags(tag, words)
    if(frequency){
      return (tag.active) ? (
        <button
        type="button"
        name={"button:" + tag.name}
        onClick={() => {
          changeState(tag, index);
        }}
        className="text-monospace mx-2 active disabled rounded mr-2 col"
        >
        {tag.name} ({frequency})
      </button>
    ) : (
      <button
      type="button"
      name={"button:" + tag.name}
      onClick={() => {
        changeState(tag, index);
      }}
      className="text-monospace mx-2 rounded mr-2 col"
      >
        {tag.name} ({frequency})
      </button>
    );
  }
  };

  // Retrieves the list of items from the Express app
  useEffect(() => {
    createState(setActivatedTags, tags)
  }, [tags]);


  return (
    <>
      <div>
        <div>
          <div className="col-12 mt-5" data-toggle="buttons-radio" aria-label="Definition Tags">
            <div className="d-flex justify-content-center my-3 mx-3 row">
              {activatedTags.map((tag, index) => {
                console.log({tag})
                return getButtons(tag, index);
              })}
            </div>
          </div>
        </div>
          {words
            .filter(word => activatedTags.some(tag => !tag.active && tag.name === word["Category"]))
            .map( (word, wordIndex) => {
              return <><h3 className="mt-5 container">{word.Words}</h3><div className="mt-5 container definition_font margin_sidebar">{ReactHtmlParser(word.Definition)}</div></>
            })
          }
      </div>
    </>
  );
};

export default DefinitionsTags;
