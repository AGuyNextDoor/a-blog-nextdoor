import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import allTopics from "../allTopics.js";
import path from 'path'
import getConfig from 'next/config'

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

const accordionIterator = (topics, path, topic = "", location = "") => {

  let folderKeys = Object.keys(topics)

  console.log({location})
  const topicName = location.query.reflection_name
  console.log({topicName})

  const keysFilt = folderKeys.filter(key => topics[key].length)

  console.log({keysFilt})
  
  return (
    <>
      {
          keysFilt.map((key, index) => {
              return (           
                <div className="accordion-item">
                    <li className={`nav-item nav-link flex-fill p-2 sidebar-item mr-3 my-2 border border-white nav-item-hover`} type="button" data-toggle="collapse" data-target={"#collapseWidthExample"+index} aria-expanded={"false"} aria-controls={"collapseWidthExample"+index}>
                        {key}
                    </li>
            {
                topics[key].map(note => {
                        return (
                            <div 
                              className = {
                                `width nav-item flex-fill p-2 sidebar-item ${topics[key].includes(topicName) ? (note === topicName ? "active text-dark font-weight-bold bg-white shadow-sm" : "") : "collapse"}`
                              }
                              id={"collapseWidthExample" + index}
                            >
                                <Link className="nav-link" key={topic + topicName} href={"/Reflections/"+note}>
                                    <text className="mx-2 cursor">{note}</text>
                                </Link>
                            </div>
                        )
                })
            }
            </div>
          )
        })
    }
    </>
  )
}

const accordionGenerator = (sidebarState, path, topic = "", location = "") => {

  console.log({
    path
  })
  console.log({location})
  
  if (topic.length > 1) {
    topic = topic[0];
  }
  console.log({
    topicName
  })

  let query = location.query[Object.keys(location.query)[0]];

  console.log({query})

  let topicTrimmed = topicName.split(".").slice(0, -1).join(".");
  topicTrimmed = topicTrimmed.replace(/_/g, " ");
  topicTrimmed = topicTrimmed.replace(/-/g, " ");

  const linkUrl = "/" + topic + "/" + topicName;

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
}

let test = 0;
let tested = 0;

const Sidebar = ({ match }) => {
  const location = useRouter();
  const [sidebarState, updatesideBarState] = useState([]);
  const [topicState, updateTopicState] = useState("")


  let flag = true;

  const sidebarContext = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    console.log({
      topicState
    })

    if (topicState[0] === "Reflections") {
      return accordionIterator(sidebarState, path, topicState, location)
    } else {
      return sidebarState.map((element) => {
        return listGenerator(element, path, topicState, location);
      });
    }

  };

  const stateUpdate = (path) => {
    let topic = allTopics.filter((element) => {
      return path.includes(element);
    });

    updateTopicState(topic)

    console.log({topic})

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
    <div className="navbar_expand pr-3">
      {sidebarState.length !== 0 ? (
        <div className="col-lg sidebar_background flex-wrap second_navbar">
          <nav className="mt-4 ml-2 flex-md-nowrap navbar-expand">
            <ul className="navbar-nav align-items-start sidebar-nav">
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

  console.log({result})

  callback(result);

  
};

const getTuringJudgesList = (callback) => {
  callback(["Home", "Game","Results", "Profile"])
}

const empty = (callback) => {
  callback([]);
};
