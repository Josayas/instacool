import "./index.css";

import createHistory from "history/createBrowserHistory";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  AnyAction,
} from "redux";

const history = createHistory();

export default function reducer(state = {}, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({
    reducer,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.register();
