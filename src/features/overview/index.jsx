import React from 'react';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

import CardSection from './cardSection';
import ChartSection from './chartSection';
import TableSection from './tableSection';
import RightTableSection from './rightTableSection';

const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: '100vh',
    marginRight: '10px',
  },
}));

export default function OverviewPage() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <div>
          <CardSection />
          <ChartSection />
          <TableSection />
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={4}>
          <RightTableSection />
        </Grid>
      </Hidden>
    </Grid>
  );
}
