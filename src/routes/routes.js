import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OrdersRoute from '../components/orders';
import CustomersRoute from '../components/customers';
import StatsRoute from '../components/statistics';
import Header from '../components/header';

export default () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <OrdersRoute />
        </Route>
        <Route path="/customers">
          <CustomersRoute />
        </Route>
        <Route path="/stats">
          <StatsRoute />
        </Route>
      </Switch>
    </div>
  </Router>
);
