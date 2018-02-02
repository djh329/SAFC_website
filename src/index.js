import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

document.querySelector('.container').style.margin = 0;
document.querySelector('.container').style.padding = 0;
document.querySelector('.container').style.minWidth = '100%';
document.querySelector('.container').style.maxWidth = '100%';
document.querySelector('.container').style.height = "100vh"


console.log(document.querySelector('.container'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
