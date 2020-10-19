import React from 'react';
import MaterialTable from 'material-table';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, FormControl, Select, MenuItem, Button, Hidden, IconButton, SvgIcon } from '@material-ui/core';

import leftArrowIcon from 'src/assets/icons/tripleArrowLeft.svg';

const useStyles = makeStyles(theme => ({
  root: {
    // maxHeight: '90vh',
    // position: 'fixed',
  },
  formControl: {
    backgroundColor: '#eef0f8',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  select: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 150,
    },
  },
  container: {
    marginBottom: 24,
    display: 'flex',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexGrow: 1,
  },
}));

export default function RightTableSection({ onClose }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product', field: 'product', width: 200 },
      {
        title: 'Image',
        field: 'image',

        render: rowData => <img src={rowData.image} alt="product" style={{ height: 42, width: 42 }} />,
      },
      { title: 'Price', field: 'price', type: 'currency' },
      {
        title: '',
        field: 'action',
        render: rowData => (
          <Button variant="contained" color="secondary">
            List
          </Button>
        ),
      },
    ],
    data: [...Array(10).keys()].map(ele => ({
      product: 'Bose Noise Cancelling Wireless Headphones',
      image: 'https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg',
      price: 270,
      action: 'list',
    })),
  });

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Hidden mdUp>
          <div className={classes.buttonWrapper}>
            <IconButton onClick={onClose}>
              <SvgIcon component={leftArrowIcon} color="primary" viewBox="0 0 29 16.111" fontSize="small" />
            </IconButton>
          </div>
        </Hidden>

        <FormControl variant="outlined" className={classes.formControl} size="small">
          <Select value="hot" className={classes.select}>
            <MenuItem value="hot">View Hot Products</MenuItem>
          </Select>
        </FormControl>
      </div>

      <MaterialTable
        columns={state.columns}
        data={state.data}
        options={{
          search: false,
          showTitle: false,
          toolbar: false,
          paging: false,
          sorting: false,
          // maxBodyHeight: '90vh',
          headerStyle: {
            fontSize: 12,
            fontWeight: 700,
            border: '1 solid #edeefa',
            backgroundColor: '#eef0f8',
          },
          rowStyle: {
            fontSize: 11,
            fontWeight: 500,
          },
        }}
      />
    </div>
  );
}
