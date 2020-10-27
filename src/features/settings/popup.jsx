import React from 'react';
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: '7px',
    },
  },
  dialogContent: {
    padding: theme.spacing(3),
  },
  disconnectedButton: {
    backgroundColor: '#ffb1b1',
  },
}));

export default function AlertDialog({ close }) {
  const classes = useStyles();

  return (
    <Dialog open aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h1" align="center" paragraph>
          Are you sure you want to disconnect your <br />
          eBay Account?
        </Typography>
        <div className={classes.container}>
          <Button onClick={close} variant="contained" color="secondary" className={classes.disconnectedButton}>
            Disconnect Account
          </Button>
          <Button onClick={close} variant="contained" color="secondary">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
