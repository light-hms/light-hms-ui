import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

export const NavBarTabs = Object.freeze({
  HOME: 0,
  DOCTORS: 1,
  PATIENTS: 2,
});

const NavBar = (props) => {
  const {currentTab} = props;

  return (
    <AppBar
      className="navbar"
      color="primary"
      position="static"
    >
      <Toolbar>
        <Tabs value={currentTab}>
          <Tab
            component={Link}
            to="/"
            label="Home"
          />
          <Tab
            component={Link}
            to="/doctors"
            label="Doctors"
          />
          <Tab
            component={Link}
            to="/patients"
            label="Patients"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
