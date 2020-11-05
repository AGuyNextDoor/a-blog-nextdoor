import React, { useState, useEffect, Component } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Reflections = () => {
  const location = useRouter();


  return (
    <div>
      <ul class="navbar-nav">
        {location.pathname.length < 13 ? (
          <div>
            <ul>
              <li>Choose your article on the sidebar</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </ul>
      {/* <Route path={`${process.env.URL + location.pathname}/:reflectionId`} component={Reflection} /> */}
    </div>
  );
};

export default Reflections;
