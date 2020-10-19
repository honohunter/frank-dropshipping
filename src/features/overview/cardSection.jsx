import React, { useEffect } from 'react';
import { makeStyles, Grid, Typography, IconButton, Hidden, SvgIcon } from '@material-ui/core';

import RightArrowIcon from 'src/assets/icons/tripleArrowRight.svg';

import BulkListIcon from 'src/assets/icons/bulkList.svg';
import BarsIcon from 'src/assets/icons/bars.svg';
import ProfitIcon from 'src/assets/icons/profit.svg';

import Card from 'src/components/card';
import Drawer from 'src/components/drawer';

import RightTableSection from './rightTableSection';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function CardSection() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.header}>
        <div>
          <Typography variant="h1" gutterBottom>
            Overview
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            View your sales analytics
          </Typography>
        </div>
        <Hidden mdUp>
          <IconButton onClick={handleOpen}>
            <SvgIcon component={RightArrowIcon} color="primary" viewBox="0 0 29 16.111" fontSize="small" />
          </IconButton>
        </Hidden>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md>
            <Card icon={BulkListIcon} text="Sold Products" value="554" />
          </Grid>
          <Grid item xs={12} md>
            <Card icon={BarsIcon} text="Revenue" value="$98,356.56" />
          </Grid>
          <Grid item xs={12} md>
            <Card icon={ProfitIcon} text="Total Profit" value="$24,457.25" />
          </Grid>
          <Grid item md={2} />
        </Grid>
      </div>
      <Drawer variant="persistent" anchor="right" open={open}>
        <RightTableSection onClose={handleClose} />
      </Drawer>
    </>
  );
}
