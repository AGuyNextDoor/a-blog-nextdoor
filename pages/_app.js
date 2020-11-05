import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import './index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <body>
      <header>
       <Navbar></Navbar>
      </header>

      <div class="container-fluid">
        <div class="row">
          <Sidebar></Sidebar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 text-justify">
            <Component {...pageProps} ></Component>
          </main>
        </div>
      </div>
    </body>
  );
}
