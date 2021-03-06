import React, {Component} from "react";
import Image from "next/image"

const FooterGen = () => {
  return (
    <div className="container">
      <p>
        <text className="btn font-weight-normal drawing_title">Contact Information</text>
      </p>
      <div className="d-flex justify-content-between">
        <div className="row">
          <div className="">
            <div>
              <a href="https://github.com/AGuyNextDoor">
                <button className="bg-dark mr-2 text-light rounded drawing_title">GitHub</button>
              </a>
            </div>
          </div>
          <div className="">
            <div>
              <a href="https://github.com/AGuyNextDoor/a-blog-nextdoor">
                <button className="bg-dark mr-2 text-light rounded drawing_title">Blog's GitHub</button>
              </a>
            </div>
          </div>
          <div className="">
            <div>
              <a href="https://www.linkedin.com/in/martinvielvoye/">
                <button className="bg-primary mr-2 text-light rounded drawing_title">Linkedin</button>
              </a>
            </div>
          </div>
          <div className="">
            <div>
              <a href="mailto:contact.aguynextdoor@gmail.com">
                <button className="rounded mr-2 drawing_title">Mail</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomePage = () => {

  return (
    <div id="container" className="pt-3">
      <div id="body" className="container d-flex px-4 mr-5 ">
        <div className="row margin_large">
          <div className="skull">
            <Image src="/half.png" height="700" width="277"></Image>
          </div>
          <div className="mt-4">
            <h1>
              Welcome to <text className="font-weight-bold">a-blog-nextdoor</text>
            </h1>
            <div className="">
              <text className="font-weight-bold" name="homepage" id="homepage">
                <p className="font-italic">This blog is a journal of somebody having fun with too many topics at the same time.</p>
                <p>
                  I'm an independant learner and researcher since 2020. I mostly study parallels between core topics :
                  <text className="text-monospace"> Machine Learning / Artificial Intelligence and Neurosciences.</text>
                </p>
                Other topics may vary from Quantum Computing, Philosophy, Psychology, Psychotherapy, Physics, Electronics, ...
                <p>
                  Without a specific goal, I wonder around diverse fields for the pleasure of connecting dots across
                  knowledge.
                </p>
                <p>
                  This websites serves mostly as a host for written articles and reflections, but also as a portfolio
                  for various productions.
                </p>
                <p>Enjoy your stay and don't hesitate to contact me for any information at any of the links below.</p>
              </text>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="font-weight-light border-top mb-2">
        <div className="container">
          <FooterGen />
        </div>
      </footer>
    </div>
  );
}

export default HomePage
