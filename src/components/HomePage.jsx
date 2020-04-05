import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <Link to="/patients">
      Patients
    </Link>
    <br/>
    <Link to="/doctors">
      Doctors
    </Link>
  </div>
);

export default HomePage;
