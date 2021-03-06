import React, { useState, useEffect, Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactDOM from "react-dom";
// import path from "path";

const getImages = async (callback, location) => {
  // let result = await fetch("/api/getImages").then((res) => res.json());
  let result = await fetch("/drawingsURL.json").then((res) => res.json());

  callback(result[location.query.drawName]);
};

const Folder = () => {
  const [folderState, updateFolderState] = useState([]);
  const location = useRouter();

  const {drawName, draw} = location.query

  const findImages = (urlName) => {
    return (
      <div class="col-12 m-auto hoverable">
        <Image
          class="pt-3 rounded"
          src={"/api/drawings/" + location.query.drawName + "/full_images/" + urlName}
          unsized
          layout="fill"

        />
      </div>
    );
  };

  useEffect(() => {
    getImages(updateFolderState, location);
  }, [location.query.drawName]);

  return (
    <div class="margin_sidebar album py-5 text-center">
      <div class="container">
        {folderState ? (
          <>
            <div id="main" class="row">
              {findImages(draw)}
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
