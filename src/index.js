import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import paginaprincipal from './pages/paginaprincipal';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/pages/paginaprincipal" component={paginaprincipal}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
