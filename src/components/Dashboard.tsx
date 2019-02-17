import * as React from "react";
import Grid from "./Grid";
import DashboardBar from "./DashboardBar";
import { Route } from "react-router-dom";
import Account from "./Account";

export default () => (
  <React.Fragment>
    <DashboardBar />
    <Route path="/dashboard/account" exact component={Account} />
    <Route path="/dashboard/home" exact component={Grid} />
  </React.Fragment>
);
