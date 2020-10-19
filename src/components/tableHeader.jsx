import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

import BulkIcon from 'src/assets/icons/bulk.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  rightSection: {
    flexGrow: 1,
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0),
    },
  },
  button: {
    color: '#ffffff',
    backgroundColor: '#367cff',
    border: '1px solid #edeefa',
    // height: 30,
    width: 120,
  },
  subtitle: {
    color: '#a4afb6',
  },
  bulkButton: {
    color: '#ffffff',
    width: 160,
    border: '1px solid #edeefa',
    backgroundColor: '#8090ff',
  },
}));

export default function TableHeader({ title, subtitle, count, bulk }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightSection}>
        <Typography variant="h1">
          {title} - {count}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <div className={classes.leftSection}>
        {bulk && (
          <Button variant="outlined" className={classes.bulkButton} size="small" startIcon={<BulkIcon />}>
            Bulk List
          </Button>
        )}
        <Button variant="outlined" className={classes.button} size="small">
          CSV
        </Button>
        <Button variant="outlined" className={classes.button} size="small">
          Excel
        </Button>
      </div>
    </div>
  );
}
