import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './dashboard/Dashboard';
import SplashPage from './splash/SplashPage';
import LaunchFlow from './launch/LaunchFlow';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/launch" component={LaunchFlow} />
          <Route component={SplashPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
