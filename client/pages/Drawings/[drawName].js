import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image"
import ReactDOM from "react-dom";
// import path from "path";

const getImages = async (callback, location) => {
  // let result = await fetch("/api/getImages").then((res) => res.json());
  let result = await fetch("/drawingsURL.json").then((res) => res.json());

  console.log(location.query.drawName);
  console.log(result[location.query.drawName]);

  callback(result[location.query.drawName]);
};

const Folder = () => {
  const [folderState, updateFolderState] = useState([]);
  const location = useRouter()

  const findImages = (urlName) => {
    return (
      <div class="col-md-6">
        <div class="mb-6 box-shadow">
          <Image
            src={"/api/drawings/" + location.query.drawName + "/full_images/" + urlName}
            unsized
            class="mx-auto rounded mt-3"
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    getImages(updateFolderState, location);
  }, [location.query.drawName]);

  return (
    <div class="album py-5 text-center">
      <div class="container">
        {folderState ? (
          <>
            <div id="main" class="row">
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
