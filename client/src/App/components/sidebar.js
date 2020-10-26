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

  if (topic.length > 1) {
    topic = topic[0];
  }

  const linkUrl = "/" + topic + "/" + topicName;
  if (linkUrl.includes(".") && typeof linkUrl === "string" && typeof topicName === "string") {
    let topicTrimmed = topicName.split(".").slice(0, -1).join(".");
    topicTrimmed = topicTrimmed.replace(/_/g, " ");
    topicTrimmed = topicTrimmed.replace(/-/g, " ");

    let pathTrimmed = decodeURI(path);
    pathTrimmed = pathTrimmed.split(".").slice(0, -1).join(".");
    pathTrimmed = pathTrimmed.replace(/_/g, " ");
    pathTrimmed = pathTrimmed.replace(/-/g, " ");

    if (pathTrimmed.includes(topicTrimmed)) {
      return (
        <li class="nav-item flex-fill p-2 sidebar-item active">
          <Link class="nav-link" to={linkUrl} href={topicName}>
            {topicTrimmed}
          </Link>
        </li>
      );
    } else {
      return (
        <li class="nav-item flex-fill p-2 sidebar-item">
          <Link class="nav-link" to={linkUrl} href={topicName}>
            {topicTrimmed}
          </Link>
        </li>
      );
    }
  } else {
    if (path.includes(topicName)) {
      return (
        <li class="nav-item flex-fill p-2 sidebar-item active">
          <Link class="nav-link" to={linkUrl} href={topicName}>
            {topicName}
          </Link>
        </li>
      );
    } else {
      return (
        <li class="nav-item flex-fill p-2 sidebar-item">
          <Link class="nav-link" to={linkUrl} href={topicName}>
            {topicName}
          </Link>
        </li>
      );
    }
  }
};

const updateState = (callback) => {
  let result = allFolder();
  callback(result);
};

let test = 0;
let tested = 0;

const Sidebar = ({ match, location }) => {
  const [sidebarState, updatesideBarState] = useState([]);

  let flag = true;

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

    switch (topic[0]) {
      case "Drawings":
        getImageDir(updatesideBarState);
        break;
      case "Articles":
        if (test !== 0) {
          if (tested < 1) {
            window.location.reload();
          }
          tested += 1;
        }
        getList(updatesideBarState);
        break;
      case "Reflections":
        getReflectionList(updatesideBarState);
        break;
      default:
        flag = false;
        empty(updatesideBarState);
    }
  };

  useEffect(() => {
    stateUpdate(location.pathname);
    test += 1;
  }, [location.pathname, flag]);

  return (
    <div class="col-lg bg-light navbar_expand">
      {sidebarState[0] === true ? (
        <div class="col-lg bg-light flex-wrap second_navbar">
          <nav class="flex-md-nowrap navbar-expand">
            <ul class="navbar-nav sidebar-nav">
              {sidebarState ? (
                sidebarContext(location.pathname)
              ) : (
                <div class="spinner-grow justify-content-center" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </ul>
          </nav>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;

function importAll(r) {
  return r.keys().map(r);
}

const getImageDir = (callback) => {
  // const uploadsDirectory = path.join(__dirname, "../../images/");

  const completeUrl = importAll(require.context("../../images/full_img/", false, /\.(png|jpe?g|svg)$/));

  console.log({ completeUrl });

  const folders = allFolder(completeUrl);

  return callback([true, ...folders]);
};

const getList = async (callback) => {
  let result = await fetch("/api/getArticles").then((res) => res.json());
  // .then((list) => updateListState(list));

  callback([true, ...result]);
};

const getReflectionList = async (callback) => {
  let result = await fetch("/api/getReflectionList").then((res) => res.json());
  // .then((list) => updateListState(list));

  callback([true, ...result]);
};

const empty = (callback) => {
  callback([false]);
};
