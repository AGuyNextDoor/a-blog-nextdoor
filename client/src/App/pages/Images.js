import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";
// import fs from "fs";
// import util from "util";

// console.log(fs.readFile);

// const readdir = util.promisify(fs.readdir);

export function allFolder(r = []) {
  if (r.length !== 0) {
    r = getImageDir(getAllImages);
  }

  console.log({ r });

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

function importAll(r) {
  return r.keys().map(r);
}

function topThreeImages(folderName, completeUrl) {
  let result = [];

  console.log({ completeUrl });

  result = completeUrl.map((url) => {
    console.log({ url });
    if (url.match(/(?<=\.)(.*?)(?=\.)/g)[0] === folderName) {
      return url;
    }
  });

  result = result.filter((url) => {
    if (url) {
      return url;
    }
  });

  return result;
}

const getAllImages = (element) => {
  return element;
};

const getImageDir = (callback) => {
  const uploadsDirectory = path.join(__dirname, "../../images/thumbnails/");

  const completeUrl = importAll(require.context("../../images/full_img/", false, /\.(png|jpg|jpeg|pdf|svg)$/));

  return callback(completeUrl);
};

const Images = ({ match } = "") => {
  const [imageState, updateImageState] = useState([]);

  const imagePile = (folderName) => {
    const urls = topThreeImages(folderName, imageState);

    return (
      <div id="photo">
        <Link to={"/Drawings/" + folderName}>
          <h2>{folderName}</h2>
        </Link>
        <div id="photo-center">
          <div id="small_1">
            <Link to={"/Drawings/" + folderName}>
              <img id="copy" src={"/images/" + urls[0]} class="img-thumbnail rounded"></img>
            </Link>
          </div>
          <div id="small_2">
            <Link to={"/Drawings/" + folderName}>
              <img id="copy" class=" img-thumbnail rounded" src={"/images/" + urls[1]}></img>
            </Link>
          </div>
          <div id="small_3">
            <Link to={"/Drawings/" + folderName}>
              <img id="copy" src={"/images/" + urls[2]} class="img-thumbnail rounded"></img>
            </Link>
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
    <div className="App">
      {imageState.length ? (
        <div id="main">{allFolder(imageState).map((folderName) => imagePile(folderName))}</div>
      ) : (
        <div>
          Loading...
          <img
            id="copy"
            src="/images/Afire_Love.Portrait.jpg"
            // class="img-thumbnail rounded"
          ></img>
        </div>
      )}

      <Route path={`${match.url}/:groupName`} urlList={imageState} component={Folder} />
    </div>
  );
};

const getImages = async (callback) => {
  let result = await fetch("/api/getImages").then((res) => res.json());

  // .then((list) => updateListState(list));

  console.log("plop");
  console.log({ result });

  // readdir("/images", (err, files) => {
  //   console.log({ files });
  // });

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

  useEffect(() => {
    getImages(updateFolderState);
  }, []);

  return (
    <div>
      {match.params}
      plop
    </div>
  );
};

const empty = (callback) => {
  callback([false]);
};

const Drawings = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = () => {
    // const uploadsDirectory = path.join(__dirname, "../../images/");
    // const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));
    // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));
    // updateFolderState(completeUrl);
  };

  useEffect(() => {
    // getFolder();
  }, []);

  return (
    <div>
      <Route exact path={`/Drawings`} component={Images} />
    </div>
  );
};

export default Drawings;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
