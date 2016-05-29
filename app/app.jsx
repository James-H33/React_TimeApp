var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

// Styles
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!ApplicationStyles');




ReactDOM.render(
  <Router history={hashHistory} >
    <Router path="/" component={Main}> </Router>
  </Router>,
  document.getElementById('app')
);
