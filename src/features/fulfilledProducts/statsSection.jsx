import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
    display: 'flex',
  },
  rounded: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#9bf7be',
    marginRight: 10,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    // maxWidth: 200,
    backgroundColor: '#eef0f8',
    borderRadius: 4,
    marginRight: 10,
  },
  label: {
    marginRight: 20,
  },
}));

export default function Stats() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.rounded} />
        <Typography variant="h6" className={classes.label}>
          Today
        </Typography>
        <Typography variant="h6">+$74.29 (+8.29)</Typography>
      </div>
      <div className={classes.card}>
        <div className={classes.rounded} />
        <Typography variant="h6" className={classes.label}>
          This Week
        </Typography>
        <Typography variant="h6">+$74.29 (+8.29)</Typography>
      </div>
    </div>
  );
}
