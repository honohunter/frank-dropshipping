import React from 'react';
import { makeStyles, Typography, AppBar, Tabs, Tab } from '@material-ui/core';

import TabPanel from 'src/components/TabPanel';
import GeneralInfoTab from './generalInfo';

const useStyles = makeStyles(theme => ({
  topSection: {
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: '#a4afb6',
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.topSection}>
        <Typography variant="h1">Settings</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Manage your app settings
        </Typography>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="General Info" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
            <Tab label="Product Template" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <GeneralInfoTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
}
