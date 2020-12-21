import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import path from "path";

export function allFolder(r = []) {
  if (r.length !== 0) {
    r = getImageDir(getAllImages);
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

function importAll(r) {
  return r.keys().map(r);
}

function topThreeImages(folderName, completeUrl) {
  let result = [];

  result = completeUrl.map((r) => {
    if (r.match(/(?<=\.)(.*?)(?=\.)/g)[0] === folderName) {
      return r;
    }
  });

  result = result.filter((r) => {
    if (r) {
      return r;
    }
  });

  return result;
}

const getAllImages = (element) => {
  return element;
};

const getImageDir = (callback) => {
  const uploadsDirectory = path.join(__dirname, "../../images/");

  const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));

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
              <img
                id="copy"
                src={urls[0]}
                // class="img-thumbnail rounded"
              ></img>
            </Link>
          </div>
          <div id="small_2">
            <Link to={"/Drawings/" + folderName}>
              <img
                id="copy"
                // class=" img-thumbnail rounded"
                src={urls[1]}
              ></img>
            </Link>
          </div>
          <div id="small_3">
            <Link to={"/Drawings/" + folderName}>
              <img
                id="copy"
                src={urls[2]}
                // class="img-thumbnail rounded"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getImageDir(updateImageState);
  }, []);

  return (
    <div className="App">
      {imageState.length ? (
        <div id="main">{allFolder(imageState).map((folderName) => imagePile(folderName))}</div>
      ) : (
        <div>Loading...</div>
      )}

      <Route path={`${match.url}/:groupName`} component={Folder} />
    </div>
  );
};

const Folder = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = () => {
    const uploadsDirectory = path.join(__dirname, "../../images/");

    const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));
    // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));

    updateFolderState(completeUrl);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div>
      {match.params}
      plop
    </div>
  );
};

const Drawings = ({ match }) => {
  const [folderState, updateFolderState] = useState([]);

  const getFolder = () => {
    const uploadsDirectory = path.join(__dirname, "../../images/");

    const completeUrl = importAll(require.context("../../images/", false, /\.(png|jpe?g|svg)$/));
    // const completeFolder = allFolder(require.context("../../images/", false, /\.(png|jpe?g|svg)$/)));

    updateFolderState(completeUrl);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div>
      <Route exact path={`/Drawings`} component={Images} />

      {/* <Route
        path={`${match.url}/:groupName`}
        render={(folderState) => (

        )Folder}
        urlsList={folderState}
      /> */}
    </div>
  );
};

export default Drawings;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
