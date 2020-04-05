import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router';
import NewPatient from "./NewPatient";

const PatientListingPage = () => (
  <>
    Patients Listing Page
  </>
);

const PatientsRouter = () => {
  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/new`} exact component={NewPatient}/>
      <Route path={`${path}`} component={PatientListingPage}/>
    </Switch>
  );
};

export default PatientsRouter;
