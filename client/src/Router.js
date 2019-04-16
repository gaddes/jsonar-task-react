import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Data from "./Data";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={App} />
      <Route exact path="/data" component={Data} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;