import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, Typography } from '@material-ui/core';

import ProfitChip from 'src/components/profitChip';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  chip: {
    width: 36,
    height: 23,
    borderRadius: 4,
    backgroundColor: '#61ffb8',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginBottom: theme.spacing(3),
  },
}));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product', field: 'product', width: 150 },
      {
        title: 'Image',
        field: 'image',
        render: rowData => <img src={rowData.image} alt="product" style={{ height: 42, width: 42 }} />,
      },
      { title: 'Date Sold', field: 'dateSold', type: 'date', width: 150 },
      { title: 'Price', field: 'price', type: 'currency' },
      {
        title: 'Profit',
        field: 'profit',
        render: rowData => <ProfitChip profit={rowData.profit} />,
      },
      { title: 'Platform', field: 'platform' },
      { title: 'Status', field: 'status' },
    ],
    data: [...Array(8).keys()].map(ele => ({
      product: 'Bose Noise Cancelling Wireless Headphones',
      image: 'https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg',
      dateSold: '06-21-2020',
      price: 270,
      profit: 8,
      platform: 'eBay',
      status: 'status',
    })),
  });

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <Typography variant="h2">Recent Transactions</Typography>
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
