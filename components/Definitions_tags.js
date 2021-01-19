import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

const createState = (callback, state) => {
  const array = state.map(element => {
    return {name: element, active : false}
  })

  callback(array)
}

const DefinitionsTags = ({ tags, words, list }) => {
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
    console.log({words})

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
          {words.map( word => {
            return word.map( line => {
              return  <><div className="mt-5 container">{line[0]}</div><div className="mt-5 container definition_font margin_sidebar">{ReactHtmlParser(line[1])}</div></>
            })
          })}
      </div>
    </>
  );
};

export default DefinitionsTags;
