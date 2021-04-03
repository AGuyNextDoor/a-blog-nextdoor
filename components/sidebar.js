import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import allTopics from "../allTopics.js";
import slugify from "slugify"

const listGenerator = (topicName, path, topic = "", location) => {

  if (!topic) {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    topic = topic[0];
  }

  if (topic.length > 1) {
    topic = topic[0];
  }

  let query = location.query[Object.keys(location.query)[0]];

  let topicTrimmed = topicName.split(".").slice(0, -1).join(".");
  topicTrimmed = topicTrimmed.replace(/_/g, " ");
  topicTrimmed = topicTrimmed.replace(/-/g, " ");

  const linkUrl = "/" + topic + "/" + topicName;

  console.log(location);
  console.log(topicName);
  console.log({topicTrimmed});
  if (linkUrl.includes(".") && typeof linkUrl === "string" && typeof topicName === "string") {
    

    let pathTrimmed = decodeURI(path);
    pathTrimmed = pathTrimmed.split(".").slice(0, -1).join(".");
    pathTrimmed = pathTrimmed.replace(/_/g, " ");
    pathTrimmed = pathTrimmed.replace(/-/g, " ");


    if (query === topicName) {
      return (
        <li className="nav-item flex-fill p-2 sidebar-item active text-dark font-weight-bold bg-white shadow-sm">
          <Link className="nav-link" key={topic + topicName} href={linkUrl}>
            <text className="mx-2 cursor">{topicTrimmed}</text>
          </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item flex-fill p-2 sidebar-item">
          <Link className="nav-link" key={topic + topicName} href={linkUrl}>
            <text className="mx-2 cursor">{topicTrimmed}</text>
          </Link>
        </li>
      );
    }
  } else {
    if(!(topicTrimmed)){
      topicTrimmed = topicName;
    }
    if (query === topicName) {
      return (
        <li className="nav-item flex-fill p-2 sidebar-item active text-dark font-weight-bold bg-white shadow-sm">
          <Link className="nav-link" key={topic + topicName} href={linkUrl}>
            <text className="mx-2 cursor">{topicTrimmed}</text>
          </Link>
        </li>
      );
    } else if (location.pathname.includes(topicName)) {
      return (
        <li className="nav-item flex-fill p-2 sidebar-item active text-dark font-weight-bold bg-white shadow-sm">
          <Link className="nav-link" key={topic + topicName} href={linkUrl}>
            <text className="mx-2 cursor">{topicTrimmed}</text>
          </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item flex-fill p-2 sidebar-item">
          <Link className="nav-link" key={topic + topicName} href={linkUrl}>
            <text className="mx-2 cursor">{topicTrimmed}</text>
          </Link>
        </li>
      );
    }
  }
};

let test = 0;
let tested = 0;

const Sidebar = ({ match }) => {
  const location = useRouter();
  const [sidebarState, updatesideBarState] = useState([]);

  let flag = true;

  const sidebarContext = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    return sidebarState.map((element) => {
      return listGenerator(element, path, topic, location);
    });
  };

  const stateUpdate = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    switch (topic[0]) {
      case "Drawings":
        getImagesDir(updatesideBarState);
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
      case "Turing_Judges":
        getTuringJudgesList(updatesideBarState);
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
    <div className="navbar_expand">
      {sidebarState.length !== 0 ? (
        <div className="col-lg sidebar_background flex-wrap second_navbar">
          <nav className=" ml-2 flex-md-nowrap navbar-expand">
            <ul className="navbar-nav sidebar-nav">
              {sidebarState ? (
                sidebarContext(location.pathname)
              ) : (
                <div className="spinner-grow justify-content-center" role="status">
                  <span className="sr-only">Loading...</span>
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

const getImagesDir = async (callback) => {
  const folders = await fetch("/drawingsURL.json").then((res) => res.json());

  const keys = Object.keys(folders);

  return callback([...keys]);
};

const getList = async (callback) => {
  // let result = await fetch("/articlesURL.json").then((res) => res.json());
  // // .then((list) => updateListState(list));

  // result = result.articles

  // callback([...result]);

  // const result = await fetch("/tags.json").then((res) => res.json());

  // let keysArray = Object.keys(result);

  callback([]);
};

const getReflectionList = async (callback) => {
  let result = await fetch("/reflectionsURL.json").then((res) => res.json());
  // .then((list) => updateListState(list));

  result = result.reflections

  callback([...result]);

  
};

const getTuringJudgesList = (callback) => {
  callback(["Game","Results"])
}

const empty = (callback) => {
  callback([]);
};
