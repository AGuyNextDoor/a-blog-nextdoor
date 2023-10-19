import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link"
import Image from "next/image"
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


  return [imgGroup[0], imgGroup[1], imgGroup[2]];
}

const Images = () => {
  const [imageState, updateImageState] = useState([]);
  const location = useRouter()

  const imagePile = (category, imgGroup) => {
    const urls = topThreeImages(imgGroup);

    return (
      <div className="col-4 p-2 m-3">
        <div id="photo">
          <div>
          <Link href={"/Drawings/" + category}>
            <text className="card_title font-weight-bold text-capitalize drawing_title">{category}</text>
          </Link>
          </div>
          <div id="photo-center">
            <div id="small_1">
              <Link href={"/Drawings/" + category}>
                <Image
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[0]}
                  className="img-thumbnail rounded"
                  width={100}
                  height={100}
                ></Image>
              </Link>
            </div>
            <div id="small_2">
              <Link href={"/Drawings/" + category}>
                <Image
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[1]}
                  className="img-thumbnail rounded"
                  width={100}
                  height={100}
                ></Image>
              </Link>
            </div>
            <div id="small_3">
              <Link href={"/Drawings/" + category}>
                <Image
                  id="copy"
                  src={"/api/drawings/" + category + "/thumbnails/" + urls[2]}
                  className="img-thumbnail rounded"
                  width={100}
                  height={100}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getImages(updateImageState);
  }, []);

  return (
    <div id="drawing_body" className=" margin_sidebar text-center container">
      {Object.keys(imageState).length ? (
      <div id="main" className="row justify-content-center">
          {Object.keys(imageState).map((category) => {
            return imagePile(category, imageState[category]);
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

  callback(result);
};

const Folder = ({ match, props }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = () => {
    getImages(props.urlList);
  };

  getFolder();

  useEffect(() => {
    getImages(updateFolderState);
  }, []);

  return <div>{folderState}</div>;
};

export default Images;
