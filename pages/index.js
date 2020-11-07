import React, {Component} from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { StaticRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {

  return (
    <>
      <h1>
        Welcome to <text class="font-weight-bold">a-blog-nextdoor</text>
      </h1>
      <br />
      <text class="font-weight-light" name="homepage" id="homepage">
        <p>This blog is a journal of somebody having fun with too many topics at the same time.</p>
        <p>Enjoy your stay! Don't hesitate to contact me for any information.</p>
      </text>
      <br />
      <br />
      <hr />
      <text class="font-italic">Music of the moment</text>: Ball and Biscuit - The White Stripes
      <br />
      <br />
      <footer class="font-weight-light bg-light">
        <text class="font-weight-normal">Contact information:</text>
        <br />
        <li>
          <a href="https://github.com/AGuyNextDoor">Personal GitHub</a>
        </li>
        <li>
          <a href="https://github.com/AGuyNextDoor/a-blog-nextdoor">Blog's GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/martinvielvoye/">Linkedin</a>
        </li>
        <li>
          <a href="mailto:contact.aguynextdoor@gmail.com">Mail</a>
        </li>
      </footer>
    </>
  );
}

export default HomePage
