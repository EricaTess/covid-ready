import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import NavBar from "./components/NavBar";
// import { useAuth0 } from "./react-auth0-spa";

import GoogleMap from './components/GoogleMap';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={GoogleMap} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={UserLogin} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App