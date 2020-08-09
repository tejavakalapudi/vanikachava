import React, { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../css/index.css';
// eslint-disable-next-line no-undef

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('orders');

  const toggleDrawer = (event) => {
    if (event.type === 'keydown') {
      return;
    }
    setOpen(!open);
  };

  const handleSelect = (x) => {
    setActive(x);
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
      <DehazeIcon
        onClick={() => {
          toggleDrawer(true);
        }}
      />
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
