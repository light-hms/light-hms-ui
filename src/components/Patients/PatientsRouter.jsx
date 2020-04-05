import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router';
import NewPatient from "./NewPatient";

const PatientsRouter = () => {
  const {path} = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/new`} exact component={NewPatient}/>
    </Switch>
  );
};

export default PatientsRouter;
