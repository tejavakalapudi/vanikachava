import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import fetchLatestDataFromSheets from '../actions/sheets';

export default () => {
  const dispatch = useDispatch();

  const refreshResults = () => {
    dispatch(fetchLatestDataFromSheets());
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={refreshResults}>
        Refresh
      </Button>
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
    </div>
  );
};
