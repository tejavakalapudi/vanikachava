import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import OrdersRoute from '../components/orders';
import CustomersRoute from '../components/customers';
import StatsRoute from '../components/statistics';

export default () =>       
<Router>
    <div>
        <ul>
            <li>
                <Link to="/">Orders</Link>
            </li>
            <li>
                <Link to="/customers">Customers</Link>
            </li>
            <li>
                <Link to="/stats">Statistics</Link>
            </li>
        </ul>
        <hr />

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