var React = require('react');
var Main = require('./components/main');
var Topic = require('./components/topic');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var ImageDetail = require('./components/image-detail');


var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic} />
            <Route path="images/:id" component={ImageDetail} />
        </Route>
    </Router>
);

module.exports = routes;