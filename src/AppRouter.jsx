import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from 'react-router';
import PatientsRouter from './components/PatientsRouter';
import DoctorsRouter from './components/DoctorsRouter';
import HomePage from './components/HomePage';

const AppRouter = () =>
  (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/patients" component={PatientsRouter}/>
        <Route path="/doctors" component={DoctorsRouter}/>
      </Switch>
    </Router>
  );

export default AppRouter;
