import React, { useState, useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import SunIcon from 'src/assets/icons/sun.svg';

import MenuList from 'src/components/MenuList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    height: 100,
  },
  logoWrapper: {
    flexGrow: 1,
  },
  menuListWrapper: {
    height: 'calc(100% - 100px)',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 10000,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar className={classes.appBar}>
          <div className={classes.logoWrapper}>
            <Typography variant="h2">FROSTED LOGO</Typography>
          </div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleClick}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {open && (
        <div className={classes.menuListWrapper}>
          <MenuList />
          <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
            <Button fullWidth variant="contained" color="secondary" size="large" style={{ backgroundColor: '#f9f9fb' }}>
              <SunIcon />
            </Button>
            <Button fullWidth variant="contained" color="secondary" size="large">
              Logan#0001
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
