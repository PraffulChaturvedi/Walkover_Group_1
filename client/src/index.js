import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ix0owzq7.us.auth0.com"
    clientId="N1N9Zll27GM3DQipgS6FYzj3x19IESuYQ"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>,
  document.getElementById("root")
);
