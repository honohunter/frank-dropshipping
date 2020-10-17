import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, Typography, Button } from '@material-ui/core';

import ProfitChip from 'src/components/profitChip';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2, 0),
  },

  textWrapper: {
    marginBottom: theme.spacing(3),
  },
  fulfillButton: {
    backgroundColor: '#afffdb',
    width: 120,
    '&:hover': {
      // backgroundColor: 'rgba(255, 97, 97, 0.8)',
    },
  },
}));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title', width: 200 },
      {
        title: 'Product Image',
        field: 'productImage',
        render: rowData => <img src={rowData.productImage} alt="product" style={{ height: 42, width: 42 }} />,
      },
      {
        title: 'Date Sold',
        field: 'dateSold',
      },
      {
        title: 'Quantity',
        field: 'quantity',
        width: 50,
      },
      {
        title: 'Revenue',
        field: 'revenue',
        type: 'currency',
      },
      {
        title: 'Profit',
        field: 'profit',
        render: rowData => <ProfitChip profit={rowData.profit} tooltipText="Test" />,
      },
      {
        title: 'Item ID',
        field: 'itemId',
      },
      {
        title: '',
        field: 'fulfill',
        render: () => (
          <Button variant="contained" color="secondary" size="small" className={classes.fulfillButton}>
            Fulfill
          </Button>
        ),
      },
    ],
    data: [...Array(8).keys()].map(ele => ({
      title: 'Bose Noise Cancelling Wireless Headphones',
      productImage: 'https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg',
      dateSold: '06-20-2020',
      quantity: 1,
      revenue: 270,
      profit: 8,
      itemId: '10034',
    })),
  });

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={state.columns}
        data={state.data}
        options={{
          // search: false,
          showTitle: false,
          toolbar: false,
          paging: false,
          sorting: false,
          selection: true,
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
