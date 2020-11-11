import React, {Component} from "react";
import Image from "next/image"

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
    <div className="pt-3">
      <div className="container d-flex px-4 mr-5 ">
        <div className="row margin_large">
          <div className="skull">
            <img src="/half.png" height="650" width="410"></img>
          </div>
          <div>
            <h1>
              Welcome to <text className="font-weight-bold">a-blog-nextdoor</text>
            </h1>
            <br />
            <div className="">
              <text className="font-weight-light" name="homepage" id="homepage">
                <p>This blog is a journal of somebody having fun with too many topics at the same time.</p>
                <p>I'm an independant learner and researcher since 2020. I mostly study 3 core topics :</p>
                <ul>
                  <li>Machine Learning and Artificial Intelligence</li>
                  <li>Quantum Computing</li>
                  <li>Neuroscience</li>
                </ul>
                Other topics may vary from Philosophy, Psychology, Psychotherapy, Physics, Electronics, ...
                <p>
                  Without a specific goal, I wonder around diverse fields for the pleasure of connecting dots across
                  knowledge.
                </p>
                <p>I have different hobbies on the side such as martial arts, drawing, music, etc ...</p>
                <p>
                  This websites serves mostly as a host for written articles and reflections, but also as a portfolio
                  for various productions.
                </p>
                <br />
                <br />
                <p>Enjoy your stay and don't hesitate to contact me for any information at any of the links below.</p>
              </text>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer mt-auto font-weight-light">
          <div className="container">
            <text className="font-italic">Music of the moment</text>: Ball and Biscuit - The White Stripes
            <FooterGen />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage
