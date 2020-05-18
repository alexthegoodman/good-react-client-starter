import { lazy, mount, route } from "navi";
import * as React from "react";

import AppNav from "../components/layout/AppNav/AppNav";
import AuthNav from "../components/layout/AuthNav/AuthNav";
import Strings from "../services/Strings";
import Utility from "../services/Utility";
import Home from "../components/pages/Home/Home";

const utility = new Utility();
const strings = new Strings();
const changeCase = require("change-case");

const routes = mount({
  "/": route({
    title: "Home / AlexTheGoodman",
    // getData: () => api.fetchProducts(), // TODO: consider integrating Apollo Client here
    head: (
      <>
        <link rel="canonical" href="https://alexthegoodman.com/" />
      </>
    ),
    view: (
      <AppNav>
        <Home />
      </AppNav>
    ),
  })
});

export default routes;

// TODO: additional configuration
// let route = {
//   url: {
//     pathname: '/navi/core-concepts/',
//     // ...
//   }
//   segments: [/* ... */],
//   title: "Core Concepts",
//   heads: [
//     <meta name="description" content="amazeballs" />, // https://frontarm.com/navi/en/guides/setting-head-meta-title/
//   ],
//   views: [
//     <NaviLayout />,
//     <NaviMDXLayout MDXComponent={/* ... */} />,
//   ],
//   data: {
//     language: 'en',
//   },
// }

// Read more: https://frontarm.com/navi/en/guides/requests-routes-matchers/
// https://frontarm.com/navi/en/guides/nested-views/
// Upload: https://frontarm.com/navi/en/guides/authenticated-routes/
