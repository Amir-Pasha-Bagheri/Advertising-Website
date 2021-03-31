import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes/Routes'
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './Routes/ScrollToUp'
import {Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './Data/store'
import history from './history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
      <ScrollToTop/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
