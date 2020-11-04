import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import './index.css'
export default function MyApp({ Component, pageProps }) {
  // const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <body>
      <header>
       <Navbar />
      </header>

      <div class="container-fluid">
        <div class="row">
          <Sidebar/>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 text-justify">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </body>
  );
}
