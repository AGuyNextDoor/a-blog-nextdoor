import React, { useState, useEffect, Component } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Link } from "react-router-dom";


const introduction = (
  <>

    <h2>Reflections</h2>
    <p>Welcome to the reflection's pages!</p>
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
