import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";

export async function allFolder(r = []) {
  if (r.length !== 0) {
    r = await getImageDir(getAllImages);
  }

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

export const allFolders = allFolder();

function topThreeImages(imgGroup) {
  let category = imgGroup[0];
  let urls = imgGroup[1];

  // result = completeUrl.map((url) => {
  //   console.log({ url });
  //   if (url.match(/(?<=\.)(.*?)(?=\.)/g)[0] === imgGroup) {
  //     return url;
  //   }
  // });

  // result = result.filter((url) => {
  //   if (url) {
  //     return url;
  //   }
  // });

  return urls;
}

const getAllImages = (element) => {
  return element;
};

const getImageDir = async (callback) => {
  const folders = await fetch("/api/getImagesDir").then((res) => res.json());

  return callback(folders);
};

const Images = ({ match } = "") => {
  const [imageState, updateImageState] = useState([]);

  const imagePile = (imgGroup) => {
    const urls = topThreeImages(imgGroup);

    console.log({ urls });

    return (
      <div>
        <div id="photo">
          <Link to={"/Drawings/" + imgGroup[0]}>
            <h2>{imgGroup[0]}</h2>
          </Link>
          <div id="photo-center">
            <div id="small_1">
              <Link to={"/Drawings/" + imgGroup[0]}>
                <img
                  id="copy"
                  src={"/drawings/" + imgGroup[0] + "/thumbnails/" + urls[0]}
                  class="img-thumbnail rounded"
                ></img>
              </Link>
            </div>
            <div id="small_2">
              <Link to={"/Drawings/" + imgGroup[0]}>
                <img
                  id="copy"
                  src={"/drawings/" + imgGroup[0] + "/thumbnails/" + urls[1]}
                  class=" img-thumbnail rounded"
                ></img>
              </Link>
            </div>
            <div id="small_3">
              <Link to={"/Drawings/" + imgGroup[0]}>
                <img
                  id="copy"
                  src={"/drawings/" + imgGroup[0] + "/thumbnails/" + urls[2]}
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
    // getImageDir(updateImageState);
  }, []);

  return (
    <div className="text-center">
      {imageState.length ? (
        <div id="main">
          {imageState.map((imgGroup) => {
            console.log({ imgGroup });
            return imagePile(imgGroup);
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Route path={`${match.url}/:groupName`} urlList={imageState} component={Folder} />
    </div>
  );
};

const getImages = async (callback) => {
  let result = await fetch("/api/getThumbnails").then((res) => res.json());

  callback([...result]);
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
