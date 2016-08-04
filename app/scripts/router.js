import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import HomePage from './components/HomePage';
import Login from './components/Login';
import VotedForPage from './components/VotedForPage';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/login" component={Login}/>
    <Route path="/votedFor" component={VotedForPage}/>
  </Router>
);

export default router;
