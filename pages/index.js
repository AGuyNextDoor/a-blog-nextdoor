import React, {Component} from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { StaticRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterGen = () => {
  return (
    <>
      <p>
        <button
          class="btn font-weight-normal"
          type="button"
          data-toggle="collapse"
          data-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Contact Information
        </button>
      </p>
      <div class="d-flex justify-content-around">
        <div class="">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <a href="https://github.com/AGuyNextDoor">
              <button class="bg-dark text-light rounded">GitHub</button>
            </a>
          </div>
        </div>
        <div class="">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <a href="https://github.com/AGuyNextDoor/a-blog-nextdoor">
              <button class="bg-dark text-light rounded">Blog's GitHub</button>
            </a>
          </div>
        </div>
        <div class="">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <a href="https://www.linkedin.com/in/martinvielvoye/">
              <button class="bg-primary text-light rounded">Linkedin</button>
            </a>
          </div>
        </div>
        <div class="">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <a href="mailto:contact.aguynextdoor@gmail.com">
              <button class="rounded">Mail</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

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
      <footer class="card-footer footer font-weight-light bg-light">
      <FooterGen/>
        <br />
        
      </footer>
    </>
  );
}

export default HomePage
