import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";

const getImages = async (callback, location) => {
  let result = await fetch("/api/getImages").then((res) => res.json());

  console.log({ result });
  console.log({ location });

  let finalResult = result.filter((item) => location.pathname.includes(item[0]));

  console.log({ finalResult });

  callback([...finalResult]);
};

const Folder = ({ match, location }) => {
  const [folderState, updateFolderState] = useState([""]);

  const findImages = (urlName) => {
    return (
      <div class="col-md-6">
        <div class="mb-6 box-shadow">
          <img src={"/drawings/" + folderState[0][0] + "/full_images/" + urlName} class="mx-auto rounded mt-3" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    getImages(updateFolderState, location);
  }, [location.pathname]);

  return (
    <div class="album py-5 text-center">
      <div class="container">
        {console.log(folderState[0])}
        {folderState[0].length === 2 ? (
          <div id="main" class="row">
            {folderState[0][1].map((imgUrl) => findImages(imgUrl))}
          </div>
        ) : (
          <div>Loading...!</div>
        )}
      </div>
    </div>
  );
};

export default Folder;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
