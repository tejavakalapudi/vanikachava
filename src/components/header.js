/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import RefreshIcon from '@material-ui/icons/Sync';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useDispatch, useSelector } from 'react-redux';
import fetchLatestDataFromSheets from '../actions/sheets';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('orders');
  const {isBusy} = useSelector((state) => state.appState);
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (event.type === 'keydown') {
      return;
    }
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(fetchLatestDataFromSheets());
  }, []);

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
            <ListItemText primary={text} classes={{primary: 'listText'}} />
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
          <DehazeIcon classes={{root: 'icon'}} />
        </IconButton>
        
        <div>
          
          {isBusy && <CircularProgress size={20} classes={{root: 'progress_circle'}} color="inherit"/>}

          <IconButton
            edge="start"
            color="inherit"
            aria-label="refresh"
            onClick={refreshResults}
            disabled={isBusy}
          >
            <RefreshIcon  classes={{root: 'icon'}} />
          </IconButton>
        </div>

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
