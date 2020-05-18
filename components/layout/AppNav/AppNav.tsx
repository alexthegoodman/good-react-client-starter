import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import { Link, useCurrentRoute, useNavigation } from "react-navi";

import { useAppContext } from "../../../context";

import {
  Button,
  Icon,
  Menu,
  Popover,
  Position,
  Switch,
  Tag,
  Text,
  Tooltip,
} from "@blueprintjs/core";
// import * as photon from "@generated/photon";
import * as $ from "jquery";
import { useCookies } from "react-cookie";
import Utility from "../../../services/Utility";
import Strings from "../../../services/Strings";
import App from "../App/App";
import { useQuery } from "react-apollo";
import AuthClient from "../../../services/AuthClient";

const AppNav: React.FC<AppNavProps> = ({ children }) => {
  const utility = new Utility();
  const strings = new Strings();
  const authClient = new AuthClient();

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
    "reeviewrDarkMode",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    cookies["reeviewrDarkMode"] === "true" ? true : false
  );

  return (
    <App>
      <main
        className={`appContainer ${
          cookies["reeviewrDarkMode"] === "true" ? "darkMode" : "lightMode"
        }`}
      >
        <section className="mainContent">
          <div className="contentBody">{children}</div>
        </section>
      </main>
    </App>
  );
};

export default AppNav;
