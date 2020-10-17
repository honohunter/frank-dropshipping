import React from 'react';
import { makeStyles, SvgIcon, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3),
    borderRadius: 4,
    border: '1 solid #edeefa',
    backgroundColor: '#ffffff',
    minWidth: 200,
    [theme.breakpoints.down('sm')]: {
      height: 100,
    },
  },
  leftSection: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: 21,
    },
  },
}));

export default function Card({ icon, text, value }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftSection}>
        <SvgIcon component={icon} viewBox="0 0 15 15" className={classes.icon} />
        <Typography variant="subtitle2" color="textSecondary">
          {text}
        </Typography>
      </div>
      <div className={classes.rightSection}>
        <Typography variant="h2">{value}</Typography>
      </div>
    </div>
  );
}
