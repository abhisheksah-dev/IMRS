import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-4od4l0gm75ujpvq8.us.auth0.com"
    clientId="7EHW1DDOmPfWAG474Xle3s7m0LxbjElx"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
