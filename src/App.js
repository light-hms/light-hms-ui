import React from 'react';
import AppRouter from "./AppRouter";
import './App.css';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const App = () => (
  <div className="App">
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AppRouter/>
    </MuiPickersUtilsProvider>
  </div>
);

export default App;
