import React from 'react';
import { Route, Switch } from "react-router";
import CreateDoctorPage from "./CreateDoctorPage";
import DoctorsListingPage from "./DoctorsListingPage";

const DoctorsRouter = (props) => {
  const path = props.location.pathname;

  return (
    <Switch>
      <Route path={`${path}/new`} exact component={CreateDoctorPage}/>
      <Route path={`${path}`} component={DoctorsListingPage}/>
    </Switch>
  );
};

export default DoctorsRouter;
