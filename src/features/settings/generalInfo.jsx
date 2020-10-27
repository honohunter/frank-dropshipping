import React, { useState } from 'react';
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Hidden,
  Container,
} from '@material-ui/core';

import Card from 'src/components/card2';

import eBayLogo from 'src/assets/images/eBay.png';
import amazonLogo from 'src/assets/images/amazon.png';

import GeneralInfoLeft from './generalInfoLeft';
import Popup from './popup';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3, 0),
  },
  buttonDisconnected: {
    backgroundColor: '#ffb1b1',
    color: '#74302f',
    border: '1px solid #edeefa',
    width: 100,
  },
  buttonConnect: {
    border: '1px solid #edeefa',
    backgroundColor: '#eef0f8',
    width: 100,
  },
  subtext: {
    fontSize: 8,
  },
  textField: {
    backgroundColor: '#ffffff',
  },
  select: {
    backgroundColor: '#ffffff',
    height: 40,
    '& .MuiSelect-root': {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  button: {
    backgroundColor: '#b2ffdc',
  },
  root: {
    padding: theme.spacing(3, 0),
  },
}));

export default function GeneralInfoTab() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Container>
            <div className={classes.container}>
              <Typography variant="h6" paragraph>
                Connected Platforms
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card img={eBayLogo}>
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.buttonDisconnected}
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Disconnected
                    </Button>
                    <Typography variant="h6" className={classes.subtext}>
                      Expires 06-20-2020 15:25:17
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card img={amazonLogo}>
                    <Button variant="outlined" size="small" className={classes.buttonConnect}>
                      Connect
                    </Button>
                  </Card>
                </Grid>
              </Grid>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Minimum Profit
                      </Typography>
                      <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Profit
                      </Typography>
                      <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Quantity
                      </Typography>
                      <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Location
                      </Typography>
                      <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Postal Code
                      </Typography>
                      <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Country
                      </Typography>
                      <Select variant="outlined" className={classes.select}>
                        <MenuItem value="1">United States</MenuItem>
                        <MenuItem value="2">United States</MenuItem>
                        <MenuItem value="3">United States</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container direction="column">
                  <Grid item xs={12} md={4}>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Policies
                      </Typography>
                      <Button variant="contained" color="secondary">
                        Pull from
                        <img src={eBayLogo} style={{ height: 12, marginLeft: 5 }} alt="img" />
                      </Button>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Payment Policy
                      </Typography>
                      <Select variant="outlined" className={classes.select}>
                        <MenuItem value="1">Paypal</MenuItem>
                        <MenuItem value="2">Paypal</MenuItem>
                        <MenuItem value="3">Paypal</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Return Policy
                      </Typography>
                      <Select variant="outlined" className={classes.select}>
                        <MenuItem value="1">Paypal</MenuItem>
                        <MenuItem value="2">Paypal</MenuItem>
                        <MenuItem value="3">Paypal</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl margin="normal" fullWidth>
                      <Typography variant="h6" gutterBottom>
                        Shipping Policy
                      </Typography>
                      <Select variant="outlined" className={classes.select}>
                        <MenuItem value="1">Paypal</MenuItem>
                        <MenuItem value="2">Paypal</MenuItem>
                        <MenuItem value="3">Paypal</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={4}>
            <GeneralInfoLeft />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <Container>
            <Button variant="contained" size="small" color="secondary" fullWidth className={classes.button}>
              Publish Listing
            </Button>
          </Container>
        </Grid>
      </Grid>
      {open && (
        <Popup
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
