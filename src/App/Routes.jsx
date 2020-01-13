import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Chat } from './modules';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Chat />
      </Route>
    </Switch>
  </Router>
);

export default Routes;