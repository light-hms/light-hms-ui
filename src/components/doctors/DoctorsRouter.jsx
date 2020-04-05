import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router";
import DoctorsListingPage from "./DoctorsListingPage";

const DoctorsRouter = () => {
  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} component={DoctorsListingPage}/>
    </Switch>
  );
};

export default DoctorsRouter;
