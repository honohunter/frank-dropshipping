import React from 'react';
import { makeStyles, Drawer, Typography, Button } from '@material-ui/core';

import SunIcon from 'src/assets/icons/sun.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: ({ drawerWidth }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  }),
  drawer: ({ drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: ({ drawerWidth }) => ({
    width: drawerWidth,
  }),
  // necessary for content to be below app bar
  menuItems: {
    padding: theme.spacing(4, 2),
  },
  logoWrapper: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PermanentDrawerLeft({ drawerWidth, children }) {
  const classes = useStyles({ drawerWidth });

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.menuItems}>
          <div className={classes.logoWrapper}>
            <Typography variant="h2">FROSTED LOGO</Typography>
          </div>
          {children}
        </div>
        <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
          <Button fullWidth variant="contained" color="secondary" size="large" style={{ backgroundColor: '#f9f9fb' }}>
            <SunIcon />
          </Button>
          <Button fullWidth variant="contained" color="secondary" size="large">
            Logan#0001
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
