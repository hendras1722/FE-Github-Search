import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserPages from "../pages/user";

const Router = () => (
  <Fragment>
    <Switch>
      <Route path="/search" render={() => <Home />} />
      <Route path="/user/:id" render={() => <UserPages />} />
      <Route path="*" render={() => <div>notfound</div>} />
    </Switch>
  </Fragment>
);

export default Router;
