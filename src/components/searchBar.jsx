import React from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  searchWrapper: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 3),
    },
  },
  search: {
    backgroundColor: '#ffffff',
    maxWidth: 900,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    border: '1px solid #edeefa',
    backgroundColor: '#eef0f8',
    color: '#303475',
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button}>
        Go Back
      </Button>
      <div className={classes.searchWrapper}>
        <TextField variant="outlined" size="small" label="Search" fullWidth className={classes.search} />
      </div>
    </div>
  );
}
