import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactDOM from "react-dom";
import ReactHtmlParser from "react-html-parser";
import showdown from "showdown"

const converter = new showdown.Converter();

console.log("Reflections");


// import path from "path";

const Reflection = () => {
  const [reflectionState, updateReflectionState] = useState();
  const router = useRouter()
  let { reflection_name } = router.query

  

  // Retrieves the list of items from the Express app
  let title = "Loading...";
  const getReflection = () => {
    if(!(reflection_name)){
      reflection_name = "introduction.md"
    } else {
      fetch("\/api\/reflections/" + reflection_name)
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          updateReflectionState(converter.makeHtml(data));
        });
    }
  };

  useEffect(() => {
    getReflection();
  }, [reflectionState, title, reflection_name]);

  getReflection();

  return (
    <div>
      {reflectionState ? (
        <div>
          {ReactHtmlParser(reflectionState)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Reflection
