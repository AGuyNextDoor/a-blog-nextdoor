import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IterButton from "./components/button";
import Navbar from "./components/navbar";
import { Reflections } from "./pages/article";
import Home from "./pages/home";
import List from "./pages/List";
import Images from "./pages/Images";
import Folder from "./pages/Folders";
import Drawings from "./pages/Drawings";
import marked from "marked";

function App() {
  return (
    <p>
      <div className="Body">
        <Navbar />
      </div>
      <div class="container-fluid">
        <Route exact path="/" component={Home} />
        <Route path="/Reflections" component={Reflections} />
        <Route path="/article" component={List} />
        <Route path="/Drawings" component={Drawings} />
        <Route exact path="/Drawings" component={Images} />
        <Route path="/Drawings/:folderName" component={Folder} />
      </div>
    </p>
  );
}

export default App;
