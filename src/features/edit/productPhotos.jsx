import React from 'react';
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
  Paper,
} from '@material-ui/core';

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import leftArrowIcon from 'src/assets/icons/tripleArrowLeft.svg';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      borderLeft: '1px solid #edeefa',
    },
  },
  image: {
    height: 80,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'relative',
    margin: theme.spacing(1, 0),
  },
  selected: {
    '& .MuiTouchRipple-root': {
      backgroundColor: 'rgba(61, 70, 108, 0.5)',
    },
  },
  iconWrapper: {
    position: 'absolute',
    zIndex: 1,
    '& > *': {
      color: '#fff',
    },
  },
}));

export default function GeneralInfoLeft({ onClose }) {
  const classes = useStyles();
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
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Product Photos - 2 Selected
          </Typography>
          <ButtonBase className={clsx(classes.card, classes.selected)} component={Paper}>
            <img
              src="https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg"
              alt="product"
              className={classes.image}
            />
            <div className={classes.iconWrapper}>
              <CheckCircleOutlineRoundedIcon fontSize="large" />
            </div>
          </ButtonBase>
          <ButtonBase className={clsx(classes.card, classes.selected)} component={Paper}>
            <img
              src="https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg"
              alt="product"
              className={classes.image}
            />
            <div className={classes.iconWrapper}>
              <CheckCircleOutlineRoundedIcon fontSize="large" />
            </div>
          </ButtonBase>
          <ButtonBase className={clsx(classes.card)} component={Paper}>
            <img
              src="https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg"
              alt="product"
              className={classes.image}
            />
            {/* <div className={classes.iconWrapper}>
              <CheckCircleOutlineRoundedIcon fontSize="large" />
            </div> */}
          </ButtonBase>
          <ButtonBase className={clsx(classes.card)} component={Paper}>
            <img
              src="https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg"
              alt="product"
              className={classes.image}
            />
            {/* <div className={classes.iconWrapper}>
              <CheckCircleOutlineRoundedIcon fontSize="large" />
            </div> */}
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}
