import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";

function allFolder(r) {
  let folder = r.map((element) => {
    return element.match(/(?<=\.)(.*?)(?=\.)/g)[0];
  });

  folder = [...new Set(folder)];

  folder = folder.filter((r) => {
    if (r) {
      return r;
    }
  });

  console.log("Here is the folder:", { folder });

  return folder;
}

function importAll(r) {
  return r.keys().map(r);
}

const catName = (categoryName) => {
  return (
    <a class="nav-item">
      <Link class="nav-link" to={`/${categoryName}`}>
        {categoryName}
      </Link>
    </a>
  );
};

const Drawings = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  const getImageDir = () => {
    const uploadsDirectory = path.join(__dirname, "../../images/");

    const completeUrl = importAll(
      require.context("../../images/", false, /\.(png|jpe?g|svg)$/)
    );

    updateFolderState(completeUrl);
  };

  useEffect(() => {
    getImageDir();
  }, []);

  return (
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        {allFolder(folderState).map((folderName) => catName(folderName))}
      </nav>
    </div>
  );
};

export default Drawings;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
