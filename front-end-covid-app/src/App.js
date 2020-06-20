import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GoogleMap from './components/GoogleMap';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route component={NavBar} />
            <Switch>
              <Route exact path="/login" component={UserLogin} />
              <Route exact path="/" component={GoogleMap} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App