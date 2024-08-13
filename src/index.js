import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Maulana Arif</title>
      <meta
        name="description"
        content="Maulana Arif's personal website. A web developer and software engineer."
      />
      <meta
        name="keywords"
        content="Maulana Arif, web developer, software engineer"
      />
      <meta name="author" content="Maulana Arif" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
