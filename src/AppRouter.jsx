import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from 'react-router';
import PatientsRouter from './components/patients/PatientsRouter';
import DoctorsRouter from './components/doctors/DoctorsRouter';
import HomePage from './components/HomePage';
import NavBar, { NavBarTabs } from "./components/common/NavBar";

const HomeDashboard = () => (
  <>
    <NavBar currentTab={NavBarTabs.HOME}/>
    <AppContainer>
      <HomePage/>
    </AppContainer>
  </>
);

const PatientsDashboard = () => (
  <>
    <NavBar currentTab={NavBarTabs.PATIENTS}/>
    <AppContainer>
      <PatientsRouter/>
    </AppContainer>
  </>
);

const DoctorsDashboard = () => (
  <>
    <NavBar currentTab={NavBarTabs.DOCTORS}/>
    <AppContainer>
      <DoctorsRouter/>
    </AppContainer>
  </>
);

const AppContainer = (props) => (
  <div className="app-container">
    {props.children}
  </div>
);

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact render={HomeDashboard}/>
      <Route path="/patients" render={PatientsDashboard}/>
      <Route path="/doctors" render={DoctorsDashboard}/>
    </Switch>
  </Router>
);

export default AppRouter;
