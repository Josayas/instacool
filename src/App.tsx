import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import { History } from "history";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
// import services from "./services";

interface IAppProps {
  history: History;
  loadInitialData?: () => void;
}

class App extends React.Component<IAppProps> {
  // public componentDidMount() {
  //   const { auth } = services;
  //   auth.onAuthStateChanged((user: any) => {
  //     const { history } = this.props;
  //     if (user) {
  //       if (["/", "/register"].indexOf(window.location.pathname) > -1) {
  //         history.push("/app/newsfeed");
  //       }
  //     } else {
  //       if (/\app\/./.test(window.location.pathname)) {
  //         history.push("/");
  //       }
  //     }

  //     this.setState({
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
