import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  return folder;
}

function importAll(r) {
  return r.keys().map(r);
}

const catName = (categoryName) => {
  return (
    <a className="nav-item">
      <Link className="nav-link" to={`/${categoryName}`}>
        {categoryName}
      </Link>
    </a>
  );
};

const Drawings = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {allFolder(folderState).map((folderName) => catName(folderName))}
      </nav>
    </div>
  );
};

export default Drawings;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
