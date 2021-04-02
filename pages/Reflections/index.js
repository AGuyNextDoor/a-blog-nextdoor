import React, { useState, useEffect, Component } from "react";
import { useRouter } from "next/router";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from "next/image"


const introduction = (
  <>

    <h2>Reflections</h2>
    <p>Welcome to the reflection's pages!</p>
    <p>Here are a list of some of the reflections that probably don't make much sense but are (probably) full of intouchable genius.</p>
    <div className="text-center">
      <Image className="rounded mx-auto d-block" width="520" height="268" src="/api/reflections/images/wcReflections.png" alt=""/>
      <div>This word cloud is generated from all of the reflections published filtered by the <a href="https://amueller.github.io/word_cloud/">wordcloud package</a>.</div>
    </div>
  </>
);

const Reflections = () => {
  const location = useRouter();
  return (
    <>
      {location.pathname.length < 13 ? <div className="margin_sidebar">{introduction}</div> : <div></div>}
      {/* <Route path={`${process.env.URL + location.pathname}/:reflectionId`} component={Reflection} /> */}
    </>
  );
};

export default Reflections;
