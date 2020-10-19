import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    height: 100,
    borderRadius: 4,
    border: '1px solid #edeefa',
    backgroundColor: '#f6f7fb',
  },
  logoWrapper: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  children: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

export default function Card({ img, children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <img src={img} style={{ height: 25 }} alt="img" />
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
}
