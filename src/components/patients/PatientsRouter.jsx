import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router";
import PatientsListingPage from "./PatientsListingPage";

const PatientsRouter = () => {
  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} component={PatientsListingPage}/>
    </Switch>
  );
};

export default PatientsRouter;
