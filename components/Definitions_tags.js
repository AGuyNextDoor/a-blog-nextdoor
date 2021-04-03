import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

const createState = (callback, state) => {
  const array = state.map(element => {
    return {name: element, active : false}
  })

  callback(array)
}

const isTagActive = (activeTags, word) => {
  let flag = false;
  activeTags.forEach(tag => {
    if((word[tag.name] === "1") && !tag.active){
      flag = true;
    }
  })

  return flag;
}

const numberOfTags = (tag, words) => {
  let frequency = 0;
  words.forEach( word => {
    // console.log(tag, word, parseInt(word[tag.name]));
    if(parseInt(word[tag.name])){
      frequency += parseInt(word[tag.name])
    }
  })

  return frequency;
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
        className="text-monospace mx-2 active disabled rounded mr-2"
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
      className="text-monospace mx-2 rounded mr-2"
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
          <div className="col-10 mt-5" data-toggle="buttons-radio" aria-label="Definition Tags">
            <div className="d-flex justify-content-center my-3 mx-3">
              {activatedTags.map((tag, index) => {
                return getButtons(tag, index);
              })}
            </div>
          </div>
        </div>
          {words.map( (word, wordIndex) => {
            // if(activatedTags[wordIndex]){
            //   if(!activatedTags[wordIndex].active){
            //     return word.map( line => {
            //       return  <><div className="mt-5 container">{line[0]}</div><div className="mt-5 container definition_font margin_sidebar">{ReactHtmlParser(line[1])}</div></>
            //     })
            //   }
            // }
            if(isTagActive(activatedTags, word)){
              return <><div className="mt-5 container">{word.Words}</div><div className="mt-5 container definition_font margin_sidebar">{ReactHtmlParser(word.Definition)}</div></>
            }
          })}
      </div>
    </>
  );
};

export default DefinitionsTags;
