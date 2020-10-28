import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Grid,
  makeStyles,
  FormControl,
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  ButtonBase,
  Hidden,
  SvgIcon,
} from '@material-ui/core';

import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import leftArrowIcon from 'src/assets/icons/tripleArrowLeft.svg';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      borderLeft: '1px solid #edeefa',
    },
  },
  select: {
    backgroundColor: '#ffffff',
    height: 40,
    '& .MuiSelect-root': {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  textField: {
    backgroundColor: '#ffffff',
  },
  icon: {
    color: '#367cff',
  },
  selection: {
    display: 'flex',
    alignItems: 'center',
    height: 53,
    padding: theme.spacing(1, 2),
    '& > *:first-child': {
      flexGrow: 1,
    },
  },
  selected: {
    borderRadius: 4,
    border: '1px solid #edeefa',
    backgroundColor: '#f6f7fb',
  },
}));

export default function GeneralInfoLeft({ onClose }) {
  const classes = useStyles();
  const [select, setSelected] = useState(2);

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <div className={classes.buttonWrapper}>
          <IconButton onClick={onClose}>
            <SvgIcon component={leftArrowIcon} color="primary" viewBox="0 0 29 16.111" fontSize="small" />
          </IconButton>
        </div>
      </Hidden>
      <Grid container>
        <Grid item md={12}>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h5" gutterBottom>
              eBay Settings
            </Typography>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <ButtonBase
              className={clsx(classes.selection, select === 1 && classes.selected)}
              onClick={() => {
                setSelected(1);
              }}
            >
              <Typography variant="button" align="left">
                Use Out of Stock
              </Typography>
              {select === 1 && <CheckCircleRoundedIcon fontSize="large" className={classes.icon} />}
            </ButtonBase>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <ButtonBase
              className={clsx(classes.selection, select === 2 && classes.selected)}
              onClick={() => {
                setSelected(2);
              }}
            >
              <Typography variant="button" align="left">
                Require Immediate Payment with Buy it Now
              </Typography>
              {select === 2 && <CheckCircleRoundedIcon fontSize="large" className={classes.icon} />}
            </ButtonBase>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h6" gutterBottom>
              Remove Unsold Listings After:
            </Typography>
            <Select variant="outlined" className={classes.select}>
              <MenuItem value="1">15 days</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h5" gutterBottom>
              Paypal Settings
            </Typography>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h6" gutterBottom>
              Choose Account by Default:
            </Typography>
            <Select variant="outlined" className={classes.select}>
              <MenuItem value="1">cruise123@gmail.com</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h6" gutterBottom>
              Or
            </Typography>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h6" gutterBottom>
              Enter Paypal Email
            </Typography>
            <Select variant="outlined" className={classes.select}>
              <MenuItem value="1">cruise123@gmail.com</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h5" gutterBottom>
              Promotions
            </Typography>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography variant="h6" gutterBottom>
              Ad Rate
            </Typography>
            <TextField variant="outlined" size="small" fullWidth className={classes.textField} />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
