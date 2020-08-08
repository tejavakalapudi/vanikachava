import React from 'react';
import { Link } from "react-router-dom";

export default () => (
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
);
