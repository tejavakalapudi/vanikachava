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
        <Route exact path="/" component={OrdersRoute} />
        <Route exact path="/orders" component={OrdersRoute} />
        <Route path="/customers">
          <CustomersRoute />
        </Route>
        <Route path="/statistics">
          <StatsRoute />
        </Route>
      </Switch>
    </div>
  </Router>
);
