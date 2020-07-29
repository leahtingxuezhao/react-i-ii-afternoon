import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "./Card";

export default (
  <App>
    <Switch>
      <Route path="/card/:id" component={Card}></Route>
    </Switch>
  </App>
);
