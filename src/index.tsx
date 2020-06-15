import "./index.css";

import createHistory from "history/createBrowserHistory";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.register();
