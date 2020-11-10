import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image"
import ReactDOM from "react-dom";
// import path from "path";

const Folder = () => {
  const [folderState, updateFolderState] = useState([]);
  const location = useRouter()

  const findImages = (urlName) => {
    if(urlName === "Loading..."){
      return (
        <p>Loading ...</p>
      )
    } else {
      return (
          <Link href={location.query.drawName + "/" + urlName}>
        <div className="col-md-4 pb-2 col-lg-6 m-auto hoverable">
            <Image
              className="pt-3 rounded"
              src={"/api/drawings/" + location.query.drawName + "/mid/" + urlName}
              unsized
              layout="fill"
            />
        </div>
          </Link>
      );
    };
    }

  const getImages = async (callback, location, flag = false) => {
    if (flag) {
      callback(["Loading..."]);
    } else {
      // let result = await fetch("/api/getImages").then((res) => res.json());
      let result = await fetch("/drawingsURL.json").then((res) => res.json());

      callback(result[location.query.drawName]);
    }
  };

  useEffect(() => {

    getImages(updateFolderState, location, true);
    getImages(updateFolderState, location);
  }, [ location.pathname, location.query.drawName]);

  return (
    <div className="album py-5 margin_sidebar text-center">
      <div className="container">
        {folderState ? (
          <>
            <div id="main" className="row">
              {folderState.map((imgUrl) => findImages(imgUrl))}
            </div>
          </>
        ) : (
          <div>Loading...!</div>
        )}
      </div>
    </div>
  );
};

export default Folder;

// "/static/media/(Coton).Portrait Noir et Blanc.1b5fcdb1.png";
