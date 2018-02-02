import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './main'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    );
  }
}
