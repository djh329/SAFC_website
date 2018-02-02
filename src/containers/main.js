import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import About from '../components/about'
import Topbar from '../components/topbar'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
      <Topbar/>
      <Switch>
      <Route path='/about' component={About}/>
      </Switch>
      </div>
    );
  }
}
