import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GoogleMap from './components/GoogleMap';
import SignUp from './components/SignUp';
import UserLogin from './components/UserLogin';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-app">
            <Route exact path="/login" component={UserLogin} />
            <Switch>
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