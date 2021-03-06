import "core-js/stable";
import "regenerator-runtime/runtime";

import window from "global";
import TagManager from "react-gtm-module";

import * as React from "react";
import * as ReactDom from "react-dom";
import RootProvider from "./RootProvider";

const bootstrapClient = () => {
  console.info("bootstrap client");

  // TODO: add to ENV
  // See RootProvider
  // const tagManagerArgs = {
  //   gtmId: process.env.GTM,
  // };

  // TagManager.initialize(tagManagerArgs);

  ReactDom.render(<RootProvider />, document.getElementById("app"));
};

bootstrapClient();
