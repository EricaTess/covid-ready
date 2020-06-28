import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GoogleMap from './components/GoogleMap';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';

export default function App () {


  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path="/login" component={UserLogin} />
          <NavBar />
          <Switch>
            <Route exact path="/" component={GoogleMap} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );

}