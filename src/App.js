import "./App.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./scenes/Home";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import ForgotPassword from "./scenes/ForgotPassword";
import Topic from "./scenes/Topic";
import NotFound from "./scenes/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/topic/:slug" component={Topic} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
