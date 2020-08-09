/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import RefreshIcon from '@material-ui/icons/Sync';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import '../css/index.css';
import { useDispatch } from 'react-redux';
import fetchLatestDataFromSheets from '../actions/sheets';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('orders');
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (event.type === 'keydown') {
      return;
    }
    setOpen(!open);
  };

  const handleSelect = (x) => {
    setActive(x);
  };

  const refreshResults = () => {
    dispatch(fetchLatestDataFromSheets());
  };

  const Links = () => (
    <div
      role="presentation"
      onClick={() => {
        toggleDrawer(false);
      }}
      onKeyDown={() => {
        toggleDrawer(false);
      }}
    >
      {['orders', 'customers', 'statistics'].map((text, index) => (
        <List
          key={index}
          className={`listStyle ${text === active ? 'active' : ''}`}
          onClick={() => {
            handleSelect(text);
          }}
        >
          <ListItem button component={Link} to={`/${text}`}>
            <ListItemText primary={text} className="listText" />
          </ListItem>
        </List>
      ))}
    </div>
  );
  return (
    <div>
      <Toolbar className="toolbar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          <DehazeIcon />
        </IconButton>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="refresh"
          onClick={refreshResults}
        >
          <RefreshIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        classes={{ paper: 'menu' }}
        open={open}
        onClose={() => {
          toggleDrawer(false);
        }}
        BackdropProps={{ invisible: true }}
      >
        {Links()}
      </Drawer>
    </div>
  );
}

// export default menu;
