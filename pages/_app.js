import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import './index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <script
          async="async"
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS-MML_HTMLorMML"
        ></script>
      </Head>
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <div class="container-fluid">
          <div class="row">
            <Sidebar></Sidebar>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 text-justify">
              <Component {...pageProps}></Component>
            </main>
          </div>
        </div>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </body>
    </>
  );
}
