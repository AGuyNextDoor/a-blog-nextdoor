import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import './index.css'
import { Provider } from 'next-auth/client';
import { Analytics } from '@vercel/analytics/react';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <>
     <Provider options={{ site: process.env.SITE }} session={session}>

      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link> */}
        <meta name="theme-color" content="#ffffff" />
        {/* <script
          async="async"
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS-MML_HTMLorMML"
          ></script> */}
        <title>A-Blog-Nextdoor</title>
      </Head>
      <header className="">
        <Navbar></Navbar>
      </header>
      <body>
        <div className="content-area mt-sm" data-toggle="collapse" data-target=".navbar-collapse.show">
          <div className="pt-3 small_center">
            <Sidebar></Sidebar>
            <main role="main" id="weird_border"  className="inner-body pt-5 px-md-3">
              <Component {...pageProps}></Component>
            </main>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
          ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
          ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
          integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
          crossOrigin="anonymous"
          ></script>
        {/* <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> */}
      </body>
    </Provider>
    <Analytics />
  </>
  );
}
