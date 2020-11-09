import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image"
import ReactDOM from "react-dom";
// import path from "path";
console.log("Drawings");

const getImages = async (callback, location) => {
  // let result = await fetch("/api/getImages").then((res) => res.json());
  let result = await fetch("\/drawingsURL.json").then((res) => res.json());

  console.log(location.query.drawName);
  console.log(result[location.query.drawName]);

  callback(result[location.query.drawName]);
};

const Folder = () => {
  const [folderState, updateFolderState] = useState([]);
  const location = useRouter()

  const findImages = (urlName) => {
    return (
        <Link href={location.query.drawName + "/" + urlName}>
      <div class="col-md-4 pb-2 col-lg-6 m-auto hoverable">
          <Image
            class="pt-3 rounded"
            src={"/api/drawings/" + location.query.drawName + "/mid/" + urlName}
            unsized
            layout="fill"
          />
      </div>
        </Link>
    );
  };

  useEffect(() => {
    getImages(updateFolderState, location);
  }, [ location.pathname, location.query.drawName]);

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
