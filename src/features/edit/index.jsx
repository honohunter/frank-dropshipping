import React from 'react';
import { useRouter } from 'next/router';
import {
  makeStyles,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Container,
  Hidden,
  IconButton,
  SvgIcon,
  Button,
} from '@material-ui/core';

import RightArrowIcon from 'src/assets/icons/tripleArrowRight.svg';

import TabPanel from 'src/components/TabPanel';
import Drawer from 'src/components/drawer';

import GeneralInfoTab from './generalInfo';
import Description from './description';
import ProductPhotos from './productPhotos';


const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
  subtitle: {
    color: '#a4afb6',
  },
  textContainer: {
    flexGrow: 1,
  },
}));

export default function Settings() {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="xl">
        {/* <Button variant="outlined" className={classes.button}>
          Go Back
        </Button> */}
        <div className={classes.header}>
          <div className={classes.textContainer}>
            <Typography variant="h1">List Product to eBay</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Edit the product details to list the product.
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton onClick={handleOpen}>
                <SvgIcon component={RightArrowIcon} color="primary" viewBox="0 0 29 16.111" fontSize="small" />
              </IconButton>
            </Hidden>
          </div>
        </div>
      </Container>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="General Info" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
            <Tab label="Description" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <GeneralInfoTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Description />
        </TabPanel>
      </div>
      <Drawer variant="persistent" anchor="right" open={open}>
        <ProductPhotos onClose={handleClose} />
      </Drawer>
    </div>
  );
}
