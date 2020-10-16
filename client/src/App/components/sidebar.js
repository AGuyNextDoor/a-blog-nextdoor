import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { allFolder, allFolders } from "../pages/Images";
import allTopics from "../allTopics.js";

const listGenerator = (topicName, path, topic = "") => {
  if (!topic) {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    topic = topic[0];
  }

  const linkUrl = "/" + topic + "/" + topicName;
  return (
    <li>
      <Link to={linkUrl} href={topicName}>
        {topicName}
      </Link>
    </li>
  );
};

const updateState = (callback) => {
  let result = allFolder();
  callback(result);
};

let test = 0;

const Sidebar = ({ match, location }) => {
  const [sidebarState, updatesideBarState] = useState([]);

  const sidebarContext = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    return sidebarState.map((element) => {
      return listGenerator(element, path, topic);
    });
  };

  const stateUpdate = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    console.log({ topic });

    switch (topic[0]) {
      case "Drawings":
        getImageDir(updatesideBarState);
        break;
      case "Articles":
        if (test !== 0) {
          window.location.reload();
        }
        getList(updatesideBarState);
        break;
      default:
        empty(updatesideBarState);
    }
  };

  useEffect(() => {
    stateUpdate(location.pathname);
    test += 1;
  }, [location.pathname]);

  return (
    <nav id="sidebarMenu" class="col-md-3 pt-3 col-lg-2 d-md-block bg-light bd-sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column list-unstyled components">
          {sidebarState ? (
            sidebarContext(location.pathname)
          ) : (
            <div class="spinner-grow justify-content-center" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
          {/* <li>location.pathname</li>
          <li>Was useEffect : {test}</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

function importAll(r) {
  return r.keys().map(r);
}

const getImageDir = (callback) => {
  // const uploadsDirectory = path.join(__dirname, "../../images/");

  const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));

  const folders = allFolder(completeUrl);

  return callback(folders);
};

const getList = async (callback) => {
  let result = await fetch("/api/getArticles").then((res) => res.json());
  // .then((list) => updateListState(list));

  callback(result);
};

const empty = (callback) => {
  callback([
    <div>
      <p>...No Items here...</p>
    </div>,
  ]);
};
