import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";

function importAll(r) {
  return r.keys().map(r);
}

const Folder = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = (reg) => {
    const uploadsDirectory = path.join(__dirname, "../../images/");

    const completeUrl = importAll(
      require.context("../../images/", false, /\.(png|jpe?g|svg)$/)
    );
    // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));

    // console.log("completeFolder", completeFolder);
    console.log("completeUrl", completeUrl);

    updateFolderState(completeUrl);
  };

  const findImages = (urlName) => {
    // let result = correctFolder(folderState, match.params.folderName);

    let reg = new RegExp(match.params.folderName, "gi");
    if (urlName.match(reg, "gi")) {
      return <img src={urlName} class="img-thumbnail rounded" />;
    }
  };

  useEffect(() => {
    const reg = "pop";
    getFolder(reg);
  }, []);

  return (
    <div>
      {folderState.length ? (
        <div id="main">
          {folderState.map((folderName) => findImages(folderName))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Folder;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
