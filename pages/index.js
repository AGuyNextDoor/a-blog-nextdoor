import React, {Component} from "react";

const FooterGen = () => {
  return (
    <div className="container">
      <p>
        <text
          className="btn font-weight-normal drawing_title"
        >
          Contact Information
        </text>
      </p>
      <div className="d-flex justify-content-around">
        <div className="">
          <div>
            <a href="https://github.com/AGuyNextDoor">
              <button className="bg-dark text-light rounded drawing_title">GitHub</button>
            </a>
          </div>
        </div>
        <div className="">
          <div>
            <a href="https://github.com/AGuyNextDoor/a-blog-nextdoor">
              <button className="bg-dark text-light rounded drawing_title">Blog's GitHub</button>
            </a>
          </div>
        </div>
        <div className="">
          <div>
            <a href="https://www.linkedin.com/in/martinvielvoye/">
              <button className="bg-primary text-light rounded drawing_title">Linkedin</button>
            </a>
          </div>
        </div>
        <div className="">
          <div>
            <a href="mailto:contact.aguynextdoor@gmail.com">
              <button className="rounded drawing_title">Mail</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomePage = () => {

  return (
    <div className="col-12 pt-3">
      <h1>
        Welcome to <text className="font-weight-bold">a-blog-nextdoor</text>
      </h1>
      <br />
      <div className="">
        <text className="font-weight-light" name="homepage" id="homepage">
          <p>
            This blog is a journal of somebody having fun with too many topics at the same time.This blog is a journal
            of somebody having fun with too many topics at the same time. This blog is a journal of somebody having fun
            with too many topics at the same time.
          </p>
          <p>Enjoy your stay! Don't hesitate to contact me for any information.</p>
        </text>
      </div>

        <footer className="footer mt-auto font-weight-light">
          <div className="container">

          <text className="font-italic">Music of the moment</text>: Ball and Biscuit - The White Stripes
          <FooterGen /> 
          </div>
      </footer>
    </div>
  );
}

export default HomePage
