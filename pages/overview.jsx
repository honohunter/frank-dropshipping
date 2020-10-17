import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

import CardSection from 'src/features/overview/cardSection';
import ChartSection from 'src/features/overview/chartSection';
import TableSection from 'src/features/overview/tableSection';
import RightTableSection from 'src/features/overview/rightTableSection';

const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: '100vh',
    marginRight: '10px',
  },
}));

export default function OverviewPage() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}
