import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import IterButton from "./components/button";
import Navbar from "./components/navbar";
import Reflections from "./pages/Reflections";
import Home from "./pages/home";
import Articles from "./pages/Articles";
import Images from "./pages/Images";
import Folder from "./pages/Folders";
import Drawings from "./pages/Drawings";
import marked from "marked";
import Sidebar from "./components/sidebar";

export function allFolder(r) {
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

const getFolder = () => {
  const completeUrl = importAll(require.context("../images/", false, /\.(png|jpe?g|svg)$/));
  // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));

  return completeUrl;
};

function App() {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <div class="container-fluid">
        <div class="row">
          <Route path="/" component={Sidebar} />
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Route exact path="/" component={Home} />
            <Route path="/Articles" component={Articles} />
            <Route path="/Reflections" component={Reflections} />
            <Route exact path="/Drawings" component={Images} />
            <Route path="/Drawings/:folderName" component={Folder} />
          </main>
        </div>
      </div>
    </body>
  );
}

export default withRouter(App);
