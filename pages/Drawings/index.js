import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import ReactDOM from "react-dom";
import path from "path";
import { useRouter } from "next/router";
// import fs from "fs";
import util from "util";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function topThreeImages(imgGroup) {

  let urls = ""
  imgGroup = shuffle(imgGroup)
  console.log(imgGroup)


  return [imgGroup[0], imgGroup[1], imgGroup[2]];
}

const Images = () => {
  const [imageState, updateImageState] = useState([]);
  const location = useRouter()

  const imagePile = (category, imgGroup) => {
    const urls = topThreeImages(imgGroup);

    console.log({ urls });

    return (
      <div>
        <div id="photo">
          <Link href={"/Drawings/" + category}>
            <h2>{category}</h2>
          </Link>
          <div id="photo-center">
            <div id="small_1">
              <Link href={"/Drawings/" + category}>
                <img
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[0]}
                  class="img-thumbnail rounded"
                ></img>
              </Link>
            </div>
            <div id="small_2">
              <Link href={"/Drawings/" + category}>
                <img
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[1]}
                  class=" img-thumbnail rounded"
                ></img>
              </Link>
            </div>
            <div id="small_3">
              <Link href={"/Drawings/" + category}>
                <img
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[2]}
                  class="img-thumbnail rounded"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getImages(updateImageState);
    console.log(imageState);
  }, []);

  return (
    <div className="text-center">
      {Object.keys(imageState).length ? (
        <div id="main">
          {/* {imageState.map((imgGroup) => {
            console.log({ imgGroup });
            return imagePile(imgGroup);
          })} */}
          {Object.keys(imageState).map((category) => {
            return imagePile(category, imageState[category])
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* <Route path={`${process.env.URL + location.pathname}/:groupName`} urlList={imageState} component={Folder} /> */}
    </div>
  );
};

const getImages = async (callback) => {
  // let result = await fetch("/api/getThumbnails").then((res) => res.json());
  let result = await fetch("\/drawingsURLThumb.json").then((res) => res.json());
  console.log({result})

  callback(result);
};

const Folder = ({ match, props }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = () => {
    console.log(props.urlList);
    // const uploadsDirectory = path.join(__dirname, "../../images/");

    // const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));
    // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));

    getImages(props.urlList);
  };

  getFolder();

  useEffect(() => {
    getImages(updateFolderState);
  }, []);

  return <div>{folderState}</div>;
};

export default Images;
