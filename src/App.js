import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import Header from './components/header/header.component'

import Campaigns from './components/campaigns/campaigns.component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app" >
          <Header onLanguageChange={(code) => {}} />

          <Switch>
            <Route path="/campaigns">
              <Campaigns />
            </Route>
            <Redirect from="/" to="/campaigns" />
          </Switch>
        </div>
      </Router>    
    );
  }
}

export default App;
